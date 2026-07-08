import { supabase } from "../../lib/supabase";

export default async function CityPage({
  params,
}: {
  params: Promise<{
    city: string;
  }>;
}) {


  const { city } = await params;


  const { data: cityData, error } = await supabase
    .from("cities")
    .select(`
      *,
      businesses (*)
    `)
    .eq("slug", city.toLowerCase())
    .single();



  console.log("CIUDAD:", city);
  console.log("DATA:", cityData);
  console.log("ERROR:", error);



  if (!cityData) {

    return (
      <div>

        <h1>
          Ciudad no encontrada
        </h1>


        <p>
          Buscando:
          {city}
        </p>


      </div>
    );

  }



  return (

    <div>


      <h1>
        Marketplace {cityData.name}
      </h1>


      <p>
        Departamento:
        {cityData.department}
      </p>



      <h2>
        Negocios
      </h2>



      {cityData.businesses?.length === 0 && (

        <p>
          Todavía no hay negocios registrados en esta ciudad.
        </p>

      )}



      {cityData.businesses?.map((business:any)=>(

        <div key={business.id}>

          <h3>
            {business.name}
          </h3>


          <p>
            {business.description}
          </p>


        </div>

      ))}



    </div>

  );
}