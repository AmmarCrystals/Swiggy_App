import { useEffect } from "react";

const Crousel = () => {
  useEffect(() => {
    slider();
  }, []);

  async function slider() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.2812547&lng=73.0482912&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const finaldata = json.cards[0]?.imageGridCards?.info
    console.log(finaldata);
  }

  return (
    <>
      <p>Hello</p>
    </>
  );
};

export default Crousel;
