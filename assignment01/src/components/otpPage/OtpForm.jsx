import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function OtpForm() {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [isValidOtp, setIsValidOtp] = useState(null);
  const [buttonText, setButtonText] = useState('Verify Account');
  const navigate = useNavigate();

  const handleChange = (e, index) => {
    console.log(e.target.value, index);
    const value = e.target.value;
    if (isNaN(value) && value !== '') return;
    const newOtp = [...otp];
    newOtp[index] = value;

    if (value !== '' && index < otp.length - 1) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
    setOtp(newOtp);
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && otp[index] === '') {
      if (index > 0) {
        document.getElementById(`otp-input-${index - 1}`).focus();
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = ['1', '2', '3', '4'];

    if (otp.join('') === result.join('')) {
      setIsValidOtp(true);
      setButtonText('Verified');
      setTimeout(() => navigate('/course-list'), 2000);
    } else {
      setIsValidOtp(false);
      setButtonText('Verification Failed');
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen" style={{ backgroundColor: '#3F72AF' }}>
      <h1 className="text-6xl font-bold text-white mb-10">Chai aur Code</h1>
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-2">Mobile Phone Verification</h2>
          <p className="text-gray-600 mb-6">Enter the 4-digit verification code that was sent to your phone number.</p>
        </div>
        <form className="space-y-6">
          <div className="flex justify-center space-x-2">
            {/* OTP Inputs */}
          </div>
          <button
            type="submit"
            className="w-full p-2 text-white rounded-md"
            style={{ backgroundColor: '#112D4E' }}
          >
            Verify Account
          </button>
        </form>
        <div className="text-center mt-4">
          <p className="text-gray-600">Didn't receive code? <a href="#" className="text-blue-500">Resend</a></p>
        </div>
      </div>
      <img
        src='https://s3-alpha-sig.figma.com/img/6dbf/e4f9/9eddf1549be82b67d870f4041b254cab?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Et6vIZoTixOW93hRDSTMTP5zHiXBScPptDa7wio9Q19Fb3RVeyKyGSdMZNMc8b03m8cZ0ujW0IgAcOHc5a5pATb6wYlKbIcOCU3CVwOpaS5a40VH89QQ~eBtGj5qfiC9d6yfNL4gcOFGfWUKDtlz4flPXQaJAMOUP~rft27nkvk7Cbinif4IiEllm4khAfpzXqTNh48H8JOUsSgdQXBHIkL12OEZd~XdmNdfnl6lLF4M-69ZTRv7nip6jGr6zKiQ6qpV5P~BzFPPLDw0PZWjV~zQmnt8eRGvdRSuyjK9KlUjSNaNyVi8P2eeXixyUAJDCmEVW6CB6SozO0auNevxjQ__'
        alt='Background'
        style={{
          position: 'absolute',
          right: '10px',
          bottom: '10px',
          width: '150px',
          height: '150px',
          borderRadius: '18px',
          zIndex: 10 // Ensure it's above other content
        }}
      />
    </div>
  );
}

export default OtpForm;
