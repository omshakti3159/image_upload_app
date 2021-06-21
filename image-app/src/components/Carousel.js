import React from 'react'
import SwiperCore, {Autoplay,Pagination,Navigation} from 'swiper/core';
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import { Swiper, SwiperSlide } from "swiper/react"; 
import axios from "axios";

SwiperCore.use([Autoplay,Pagination,Navigation]);

const Carousel = ({data,click}) => {
  const deleteSlide=(name)=>{
    const API_URL=`http://localhost:3159/deleteimage/${name}`
    click()
    axios.delete(API_URL)
    .then((res)=>{
      console.log(res.data)
    })
  }

  let slides=[]
  for(let i=0 ; i<data.length;i++){
    slides.push(
    <SwiperSlide key={i}>
      <div className="d-flex justify-content-center flex-column">
        <img width="100%" height="210px" src={`http://localhost:3159${data[i].imageUrl}`} alt={data[i].imagefileName}/>
        <p className="text-center font-weight-bold text-uppercase">{data[i].title}</p>
        <p className="text-center">{data[i].description}</p>
        <button onClick={()=>deleteSlide(data[i].imagefileName)} className="btn btn-danger text-center mt-2">Delete</button>
      </div>
    </SwiperSlide>
    )}


    return (
        <>
      <div>
        {data.length? <Swiper spaceBetween={30} centeredSlides={true} autoplay={{
              "delay": 2500,
              "disableOnInteraction": false
            }} pagination={{
              "clickable": true
            }} navigation={true} style={{height:'380px'}}>
             {slides}
          </Swiper>:null
          }
      </div>
      </>
    )
}

export default Carousel
