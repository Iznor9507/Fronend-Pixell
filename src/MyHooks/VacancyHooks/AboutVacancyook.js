import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchVacancy } from "../../reducers/Slice/vacancySlice";
import { postResponse } from "../../reducers/Slice/responseSlice";

export function useAboutVacancyHook() {
  const [acceptedWindow, setAcceptedWindow] = useState(false);
  const [privacyPolicy, setPrivacyPolicy] = useState(false);

  const [jobApplicationForm, setJobApplicationForm] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    additionalComment: "",
  });

  const dispatch = useDispatch();

  const { id } = useParams();

  const vacancy = useSelector((state) => state.vacancySlice.vacancy).find(
    (item) => item._id === id
  );

  useEffect(() => {
    dispatch(fetchVacancy());
  }, [dispatch]);

  const hundleJobFullName = (e) => {
    setJobApplicationForm({ ...jobApplicationForm, fullName: e.target.value });
  };
  const hundleJobEmail = (e) => {
    setJobApplicationForm({ ...jobApplicationForm, email: e.target.value });
  };
  const hundleJobPhoneNumber = (e) => {
    setJobApplicationForm({
      ...jobApplicationForm,
      phoneNumber: e.target.value,
    });
  };
  const hundleJobAdditionalComment = (e) => {
    setJobApplicationForm({
      ...jobApplicationForm,
      additionalComment: e.target.value,
    });
  };

  const handleChangeButton = (e) => {
    e.preventDefault();
    dispatch(postResponse({ ...jobApplicationForm }));
    setJobApplicationForm({
      fullName: "",
      email: "",
      phoneNumber: "",
      additionalComment: "",
    });
  };

  const handlePrivacyPolicy = () => {
    setPrivacyPolicy(!privacyPolicy);
  };

  const handleClickWindow = () => {
    setAcceptedWindow(!acceptedWindow);
  };
  return {
    acceptedWindow,
    setAcceptedWindow,
    hundleJobAdditionalComment,
    hundleJobEmail,
    hundleJobFullName,
    vacancy,
    handleChangeButton,
    jobApplicationForm,
    privacyPolicy,
    hundleJobPhoneNumber,
    handleClickWindow,
    handlePrivacyPolicy,
  };
}
