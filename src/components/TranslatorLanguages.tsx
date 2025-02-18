import { RadioGroup, RadioGroupItem } from "@/components/common/radio-group";

interface Language {
  [lang: string]: string;
}

const languages: Language = {
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

interface TranslatorLanguageProps {
  setLanguage: (lang: string) => void;
}

export default function TranslatorLanguages({
  setLanguage,
}: TranslatorLanguageProps) {
  return (
    <>
      <div className="text-center mt-16">
        Please choose the languge you want to translate the text to
      </div>
      <RadioGroup
        className="flex flex-wrap justify-center flex-row mt-8 mx-4 my-8 gap-2"
        defaultValue={"spa_Latn"}
      >
        {Object.keys(languages).map((lang, index) => {
          return (
            <div
              key={`${lang}_${index}`}
              className=" items-center space-x-2 m-2"
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
    </>
  );
}
