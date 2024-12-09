import toast from "react-hot-toast";

const FallbackToasts = ({ error }) => {
  toast.error(error.message);
};

export default FallbackToasts;
