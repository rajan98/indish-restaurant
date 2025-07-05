import APP_CONSTANTS from "../../constants/app_constants";

const StoreOpeningPopup = ({
  isOpen,
  onConfirm,
  onCancel,
  title = "Store Opening Soon",
  message,
  confirmText = "Yes, Proceed",
  cancelText = "Cancel",
}) => {
  if (!isOpen) return null;

  const defaultMessage = `The store will open ${APP_CONSTANTS.openingDate}. Are you sure you want to proceed?`;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/60 z-[80] flex items-center justify-center p-4">
        {/* Popup Content */}
        <div className="bg-white rounded-2xl p-6 max-w-md w-full mx-4 shadow-2xl">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-600 md:text-lg text-sm">
              {message ? (
                message
              ) : (
                <>
                  The store will open{" "}
                  <span className="font-semibold text-primary-600">
                    {APP_CONSTANTS.openingDate}
                  </span>
                  . Are you sure you want to proceed?
                </>
              )}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <button
              onClick={onCancel}
              className="flex-1 md:px-4 px-2 py-3 bg-gray-100 text-gray-800 rounded-xl font-medium hover:bg-gray-200 transition-colors duration-200 md:text-md text-sm"
            >
              {cancelText}
            </button>
            <button
              onClick={onConfirm}
              className="flex-1 md:px-4 px-2 py-3 bg-primary-500 text-white rounded-xl font-medium hover:bg-primary-600 transition-colors duration-200 md:text-md text-sm"
            >
              {confirmText}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default StoreOpeningPopup;
