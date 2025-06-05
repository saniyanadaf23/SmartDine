const handleSendOtp = async () => {
  try {
    const response = await fetch("/api/send-otp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();

    if (response.ok) {
      toast.success(data.message || "OTP sent!");
    } else {
      toast.error(data.message || "Failed to send OTP.");
    }
  } catch (error) {
    console.error("Error sending OTP:", error);
    toast.error("Something went wrong. Please try again.");
  }
};
