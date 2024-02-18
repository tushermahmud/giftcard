import { useEffect, useState } from "react";
import { getCatalogues } from "../apis/api";
import useAuth from "../hooks/useAuth";

interface CatalogueItem {
  id: string;
  name: string;
  cardFaceImage:string;
}

const Catalogue: React.FC = () => {
  const [catalogues, setCatalogues] = useState<CatalogueItem[] | null>(null);
  const { authToken } = useAuth();
  useEffect(()=>{
    getCatalogues(authToken).then((data)=>{
      setCatalogues(data.items)
    })
  },[authToken])
  return (
    <div className="grid grid-cols-3 gap-4">
      {catalogues && catalogues.map((catalogue)=>{
        return <div key={catalogue.id} className="flex w-full flex-col">
          <img src={catalogue.cardFaceImage} alt={catalogue.name} />
          <h1>{catalogue.name}</h1>
        </div>
      })}
    </div>
  );
};

export default Catalogue ;
