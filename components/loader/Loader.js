const Loader = ({ message }) => {
  return (
    <div className="loader-container">
      <div className="loader" />
      <span className="loading-text">
        {message ? message : "Verifications..."}
      </span>

      <style>{`
        .loader-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 100vw;
            height: 100vh;
          }
          
          @keyframes spinner {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
          
          .loader {
            margin-top: 16px;
            border-top: 10px solid #fbcac;
            border-right: 10px solid rgba(136, 136, 136, 0.2);
            border-bottom: 10px solid rgba(136, 136, 136, 0.2);
            border-left: 10px solid rgba(136, 136, 136, 0.2);
            animation: spinner 0.9s linear infinite;
            border-radius: 50%;
            width: 64px;
            height: 64px;
          }
          
          .loading-text {
            margin-top: 16px;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 130%;
            color: #888;
          }
    `}</style>
    </div>
  );
};

export default Loader;
