import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

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

interface TranslatorLanguageProps {
  setLanguage: (lang: string) => void;
}

export default function TranslatorLanguages({
  setLanguage,
}: TranslatorLanguageProps) {
  return (
    <RadioGroup className="flex justify-around mt-8" defaultValue={"spa_Latn"}>
      {Object.keys(languages).map((lang, index) => {
        return (
          <div key={`${lang}_${index}`} className="flex items-center space-x-2">
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
  );
}
