import React from "react";

const Modal = ({ isOpen, onClose, Note, onchange, handleclick }) => {
    return (
        <div
            className={`fixed inset-0  ${isOpen ? "flex" : "hidden"
                } items-center justify-center z-50`}
        >
            <div className="fixed inset-0 bg-black opacity-50"></div>
            <div className="bg-gray-600 p-6 rounded-lg z-10 w-3/6">
                {/* Modal Content */}
                <h1 className="text-xl font-bold mb-2">Modal Title</h1>
                <p className="text-black font-bold text-base mb-4">Title</p>
                <input
                    type="text" name='etitle'
                    className="w-full p-2 border border-gray-300 rounded-lg mb-4 bg-gray-700 text-white"
                    placeholder="Title Field" value={Note.etitle} onChange={onchange}
                />
                <p className="text-black font-bold text-base mb-4">Description</p>
                <input
                    type="text" name='edescription'
                    className="w-full p-2 border border-gray-300 rounded-lg mb-4 bg-gray-700 text-white"
                    placeholder="Description Field" value={Note.edescription} onChange={onchange}
                />
                <p className="text-black font-bold text-base mb-4">Tag</p>
                <input
                    type="text" name='etag'
                    className="w-full p-2 border border-gray-300 rounded-lg mb-4 bg-gray-700 text-white"
                    placeholder="Tag Field" value={Note.etag} onChange={onchange}
                />
                <div className="flex justify-between">

                    <button
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                        onClick={handleclick}
                    >
                        Update Note
                    </button>
                    <button
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                        onClick={onClose}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
