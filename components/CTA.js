import React from "react";

const CTA = () => {
  return (
    <div className="text-center bg-gradient-to-r from-gray-700 via-gray-900 to-black min-h-screen">
      <div className="text-6xl font-extrabold pt-32 pb-10">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          Verifiable Anonymous On-Chain Voting
        </span>
      </div>
      <div className="text-5xl font-bold text-white">
        Powered by zk-proofs
      </div>
    </div>
  );
};

export default CTA;
