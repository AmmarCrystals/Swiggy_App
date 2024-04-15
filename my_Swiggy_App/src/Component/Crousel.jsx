import { useEffect, useState } from "react";

const Crousel = () => {
  const [crousel, setCrousel] = useState("");
  useEffect(() => {
    slider();
  }, []);

  async function slider() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.2812547&lng=73.0482912&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const finaldata = json.data?.cards[0]?.card?.card?.imageGridCards?.info;
    setCrousel(finaldata);
  }

return(
  <p>hello</p>
)

};

export default Crousel;
