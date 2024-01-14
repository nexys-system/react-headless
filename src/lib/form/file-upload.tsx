import React, { useState } from "react";

export interface FileComponentProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
}

export interface FileUploadProps {
  onSuccess: (f: File) => Promise<void>;
}

const FileUpload =
  (
    FileComponent: (p: FileComponentProps) => JSX.Element,
    Spinner: () => JSX.Element
  ) =>
  ({ onSuccess }: FileUploadProps) => {
    const [loading, setLoading] = useState<boolean>(false);
    const handleChange = async ({
      target,
    }: React.ChangeEvent<HTMLInputElement>) => {
      setLoading(true);

      const { files }: { files: FileList | null } = target;

      if (!files) {
        throw Error("file is undefined");
      }

      const fileArray: File[] = Array.from(files);

      if (fileArray.length === 0) {
        throw Error("file array is empty");
      }

      const [file] = fileArray;

      try {
        await onSuccess(file);
      } catch (err) {}
      setLoading(false);
    };

    if (loading) {
      return <Spinner />;
    }

    return <FileComponent onChange={handleChange} />;
  };

export default FileUpload;
