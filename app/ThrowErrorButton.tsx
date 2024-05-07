"use client";

export default function ThrowErrorButton() {
  return (
    <button
      className="mt-8 rounded bg-red-500 px-4 py-2 text-white hover:bg-red-700"
      onClick={() => {
        // return Promise.reject(new Error("Client-side error"));
        throw new Error("Client-side error");
      }}
    >
      Throw Error Client-side
    </button>
  );
}
