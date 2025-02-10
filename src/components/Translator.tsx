"use client";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function Translator() {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [language, setLanguage] = useState("spa_Latn");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchTranslate = async () => {
    if (inputText.length === 0) {
      return setError(true);
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

  const languages: any = {
    spa_Latn: "Spanish",
    fra_Latn: "French",
    deu_Latn: "German",
    kan_Knda: "Kannada",
    guj_Gujr: "Gujarati",
    hin_Deva: "Hindi",
    tel_Telu: "Telugu",
    mal_Mlym: "Malayalam",
    tam_Taml: "Tamil",
    jpn_Jpan: "Japanese",
  };

  return (
    <div className="mb-12">
      <div className="text-center mt-16">
        Please choose the languge you want to translate the text to
      </div>
      <RadioGroup className="flex justify-around mt-8" defaultValue={language}>
        {Object.keys(languages).map((lang, index) => {
          return (
            <div
              key={`${lang}_${index}`}
              className="flex items-center space-x-2"
            >
              <RadioGroupItem
                onClick={(e: any) => setLanguage(e.target.value)}
                value={lang}
                id={`lang_${index}`}
              />
              <label htmlFor={`lang_${index}`}>{languages[lang]}</label>
            </div>
          );
        })}
      </RadioGroup>

      <div className="flex justify-around">
        <div className="grid w-full gap-1.5 m-12">
          <label htmlFor="input-text">Input text</label>
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
        <div className="grid w-full gap-1.5 m-12">
          <label htmlFor="output-text">Translated text</label>
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
