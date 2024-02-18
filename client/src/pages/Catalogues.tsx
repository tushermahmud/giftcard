import { useEffect, useState } from "react";
import { getCatalogues } from "../apis/api";
import useAuth from "../hooks/useAuth";
import Catalogue from "../components/Catalogue";
import { CatalogueItem } from "../types/types";
import { toast } from "react-toastify";

const Catalogues: React.FC = () => {
  const [catalogues, setCatalogues] = useState<CatalogueItem[] | null>(null);
  const { authToken } = useAuth();
  useEffect(()=>{
    getCatalogues(authToken).then((data)=>{
      setCatalogues(data.items)
    }).catch((error)=>{
      toast.error(error.message)
    })
  },[authToken])
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 mx-4 my-10">
      {catalogues && catalogues.map((catalogue)=>{
        return <Catalogue key={catalogue.id} item={catalogue}/>
      })}
    </div>
  );
};

export default Catalogues ;
