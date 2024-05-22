
import axios from 'axios';

const updatePassword = async (learnerId, oldPassword, newPassword) => {
  try {
    // const response = await axios.put(`http://localhost:5199/lxp/learner/updatePassword`, {
    //   learnerId,
    //   oldPassword,
    //   newPassword
    // });
    const response = await axios.put(`http://localhost:5199/lxp/learner/updatePassword?learnerId=${learnerId}&oldPassword=${oldPassword}&newPassword=${newPassword}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default updatePassword;