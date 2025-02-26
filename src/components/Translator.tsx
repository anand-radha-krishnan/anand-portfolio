"use client";
import { useState } from "react";
import { Textarea } from "@/components/common/TextareaComponent";
import TranslatorLanguages from "./TranslatorLanguages";

export default function Translator() {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [language, setLanguage] = useState("spa_Latn");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchTranslate = async () => {
    if (inputText.length === 0) {
      setError(true);
      return;
    }
    setIsLoading(true);
    const response: any = await (
      await fetch(
        `https://winstxnhdw-nllb-api.hf.space/api/v4/translator?text=${inputText.replaceAll(
          ".",
          ","
        )}&source=eng_Latn&target=${language}`
      )
    ).json();

    setOutputText(response.result);
    setIsLoading(false);
  };

  return (
    <div className="mb-12">
      <TranslatorLanguages setLanguage={(lang) => setLanguage(lang)} />

      <div className="flex justify-around">
        <div className="grid w-full gap-1.5 md:m-12 m-4">
          <label htmlFor="input-text">
            <u>Input text</u>
          </label>
          <Textarea
            placeholder="Type to translate. Maximum 250 characters."
            id="input-text"
            onChange={(e) => {
              error && setError(false);
              setInputText(e.target.value);
            }}
            maxLength={250}
            value={inputText}
            rows={10}
          />
        </div>

        <div className="grid w-full gap-1.5 md:m-12 m-4">
          <label htmlFor="output-text">
            <u>Translated text</u>
          </label>
          <Textarea id="output-text" value={outputText} readOnly rows={10} />
        </div>
      </div>

      <div className="text-center">
        <button
          disabled={isLoading}
          className={`${
            isLoading
              ? "bg-gray text-white-800"
              : "bg-white text-gray-800 hover:bg-gray-300"
          } font-semibold py-2 px-4 border border-gray-400 rounded shadow`}
          onClick={fetchTranslate}
        >
          {isLoading ? "Translating..." : "Translate"}
        </button>

        {error && (
          <p className="text-red-400 mt-4">Please enter a text to translate</p>
        )}
      </div>
    </div>
  );
}
