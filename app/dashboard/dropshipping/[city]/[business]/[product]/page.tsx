import { supabase } from "../../../../lib/supabase";


export default async function ProductPage({
  params,
}: {
  params: Promise<{
    city: string;
    business: string;
    product: string;
  }>;
}) {


  const { city, business, product } = await params;



  // Buscar producto por slug
  const { data: productoEncontrado, error } = await supabase
    .from("products")
    .select(`
      *,
      businesses (
        name,
        slug
      )
    `)
    .eq("slug", product.toLowerCase())
    .single();



  console.log("PRODUCTO:", product);
  console.log("DATA:", productoEncontrado);
  console.log("ERROR:", error);



  return (

    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">


      <div className="max-w-xl w-full bg-white rounded-2xl shadow-xl p-8">


        <p className="text-sm text-gray-500 text-center">

          {city} / {business}

        </p>



        {
          productoEncontrado ? (

            <div className="text-center">


              <div className="mt-6 text-6xl">
                🛍️
              </div>



              <h1 className="text-3xl font-bold mt-5">

                {productoEncontrado.name}

              </h1>



              <p className="text-sm text-gray-500 mt-2">

                Categoría:
                {" "}
                {productoEncontrado.category}

              </p>



              <p className="mt-5 text-gray-700">

                {productoEncontrado.description}

              </p>



              <h2 className="text-4xl font-bold text-green-600 mt-6">

                $
                {productoEncontrado.price?.toLocaleString("es-CO")}

              </h2>



              <div className="grid gap-3 mt-8">


                <button className="bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700">

                  Comprar ahora

                </button>



                <button className="bg-green-600 text-white py-3 rounded-xl font-bold hover:bg-green-700">

                  Agregar al carrito

                </button>



                <button className="border py-3 rounded-xl hover:bg-gray-100">

                  ❤️ Favorito

                </button>


              </div>


            </div>



          ) : (


            <div className="text-center py-12">


              <h2 className="text-3xl font-bold text-red-500">

                Producto no encontrado

              </h2>



              <p className="mt-4 text-gray-600">

                No existe un producto con el código:

              </p>



              <p className="font-bold mt-2">

                {product}

              </p>


            </div>


          )

        }


      </div>


    </div>

  );

}