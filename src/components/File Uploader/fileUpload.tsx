import { useState } from "react";

export default function UploadResume() {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e:any) => {
    if (e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleDrop = (e:any) => {
    e.preventDefault();
    if (e.dataTransfer.files.length > 0) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (e:any) => {
    e.preventDefault();
  };

  return (
    <div className="max-w-lg mt-12 p-6 bg-white rounded-2xl shadow-lg text-center">
      <h2 className="text-2xl font-bold text-teal-500 mb-2">Upload Your Resume</h2>
      <p className="text-gray-600 mb-6">
        Drag & drop your resume here or click to browse
      </p>

      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={() => document.getElementById('resume-upload')?.click()}
        className="border-4 border-dashed border-teal-300 rounded-xl p-20 cursor-pointer hover:border-teal-400 transition-colors"
      >
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
          className="hidden"
          id="resume-upload"
        />
        <div className="text-gray-500">
          {file ? (
            <span className="text-gray-800 font-medium">{file.name}</span>
          ) : (
            <span>Click here or drag your file</span>
          )}
        </div>
      </div>

      {/* {file && (
        <p className="mt-4 text-green-600 font-semibold">
          File ready to upload ✅
        </p>
      )} */}

      <button
        className="mt-6 px-6 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition"
        disabled={!file}
        onClick={() => file && alert(`Uploading ${file.name}...`)}
      >
        Upload
      </button>
    </div>
  );
}
