import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface InitialStateBasket {
  error: string | null;
  loading: boolean;
  cartItems: Array<{}>;
  token: string | null;
  decodedPayload: string | null;
  basket: Array<string>;
}

const initialState: InitialStateBasket = {
  error: null,
  loading: false,
  cartItems: [],
  token: localStorage.getItem("token"),
  decodedPayload: null,
  basket: [],
};

interface AddBasketPayload {
  id: string;
  price: number;
}

export const parseJwt = (token: string) => {
  if (token) {
    let base64Url = token.split(".")[1];
    let base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    let jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );

    return JSON.parse(jsonPayload);
  }
};

export const getBasket = createAsyncThunk("basket/get", async (_, thunkAPI) => {
  try {
    const res = await fetch("http://localhost:3001/basket/user", {
      method: "GET",
      headers: { Authorization: `Bearer ${initialState.token}` },
    });
    const basket = await res.json();

    if (basket.error) {
      return thunkAPI.rejectWithValue(basket.error);
    }
    return thunkAPI.fulfillWithValue(basket);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const addBasket = createAsyncThunk(
  "basket/add",
  async ({ id, price }: AddBasketPayload, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:3001/basket`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${initialState.token}`,
        },
        body: JSON.stringify({ product: { productId: id, price: price } }),
      });
      const data = await res.json();
      if (data.error) {
        return thunkAPI.rejectWithValue(data.error);
      }
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const removeBasket = createAsyncThunk(
  "basket/delete",
  async (productId, thunkAPI) => {
    try {
      await fetch(`http://localhost:3001/basket/delete/${productId}`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${initialState.token}`,
        },
      });
      return productId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addBasket.fulfilled, (state, action) => {
        state.basket = action.payload;
      })
      .addCase(removeBasket.fulfilled, (state, action: PayloadAction<any>) => {
        state.basket.products = state.basket.products.filter(
          (item) => item.productId !== action.payload
        );
      })
      .addCase(getBasket.fulfilled, (state, action) => {
        state.basket = action.payload;
        console.log(action.payload);
      });
  },
});

export default cartSlice.reducer;



// interface Product {
//   productId: string;
//   price: number;
//   _id: string;
// }
// interface Basket {
//   _id: string;
//   userId: string;
//   products: Product[];
// }


// const basket:Basket = {
//   _id: "647b267dcb7533f8f2971398",
//   userId: "647b266acb7533f8f2971390",

//   products: [
//     {
//       productId: "63a09d93d5ea195bf7e14348",
//       price: 500,
//       _id: "647bab15a1b63365466b68ef",
//     },

//     {
//       productId: "63a09ecad5ea195bf7e1434a",
//       price: 450,
//       _id: "648606cc9b268799f30e2f87",
//     },
//   ],
// };


