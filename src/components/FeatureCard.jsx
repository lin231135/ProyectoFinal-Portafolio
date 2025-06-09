const FeatureCard = ({ title, icon }) => {
  return (
    <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 w-40 h-40 md:w-48 md:h-48 text-center">
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="text-base font-semibold text-gray-800">{title}</h3>
    </div>
  );
};

export default FeatureCard;