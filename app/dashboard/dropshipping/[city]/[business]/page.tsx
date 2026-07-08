import { supabase } from "../../../lib/supabase";


export default async function BusinessPage({
params,
}: {
params: Promise<{
city:string;
business:string;
}>;
}) {


const {city,business}= await params;


const {data,error}= await supabase
.from("businesses")
.select("*")
.eq("slug",business)
.single();


console.log("BUSINESS:", business);
console.log("DATA:", data);
console.log("ERROR:", error);

if (!data) {
  return (
    <div>
      <h1>
        Negocio no encontrado
      </h1>

      <p>
        Buscando: {business}
      </p>
    </div>
  );
}

return (
<div>

<h1>
Negocio: {business}
</h1>


<p>
Ciudad: {city}
</p>


<p>
Negocio:
{data?.name}
</p>


</div>
);

}