import React, { useEffect, useState } from "react";
import ImageCard from "../Components/ImageCard";
import axios from "axios";

const Images = () => {
  const API = ` https://picsum.photos/v2/list`;

  const [images, setImages] = useState();

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get(API);
        const images = response.data;
        console.log(images);

        setImages(images);
      } catch (error) {
        console.error("Error fetching Image data:", error);
      }
    };

    fetchImage();
  }, []);

  return (
    <div>
      <ImageCard />
    </div>
  );
};

export default Images;
