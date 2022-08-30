import moment from 'moment-timezone'
import React from 'react'
import Image from 'next/image'
export default function SlideShow({city1,city2,city3,city4}) {
  return (
    <div className='hourly'>
      <h1>Some cities in the world</h1>
        <div className='hourly__inner'>
             <div className='hourly__box-wrapper'> 
                <div className='hourly__box'>
                    <span className='hourly__time'>
                      New york
                    </span>
                    <Image src={`https://openweathermap.org/img/wn/${city1.weather[0].icon}@2x.png`} alt={city1.weather[0].description} width="100" height="100" />
                    <span>{city1.temp}&deg;C</span>                
                </div>
             </div>
             <div className='hourly__box-wrapper'> 
                <div className='hourly__box'>
                    <span className='hourly__time'>
                      Ha Noi
                    </span>
                    <Image src={`https://openweathermap.org/img/wn/${city2.weather[0].icon}@2x.png`} alt={city2.weather[0].description} width="100" height="100" />
                    <span>{city2.temp}&deg;C</span>                
                </div>
             </div>   
             <div className='hourly__box-wrapper'> 
                <div className='hourly__box'>
                    <span className='hourly__time'>
                    Tokyo
                    </span>
                    <Image src={`https://openweathermap.org/img/wn/${city3.weather[0].icon}@2x.png`} alt={city3.weather[0].description} width="100" height="100" />
                    <span>{city3.temp}&deg;C</span>                
                </div>
             </div>   
             <div className='hourly__box-wrapper'> 
                <div className='hourly__box'>
                    <span className='hourly__time'>
                    Thanh pho Ho Chi Minh
                    </span>
                    <Image src={`https://openweathermap.org/img/wn/${city4.weather[0].icon}@2x.png`} alt={city4.weather[0].description} width="100" height="100" />
                    <span>{city4.temp}&deg;C</span>                
                </div>
             </div>     
        </div>
    </div>
  )
}
