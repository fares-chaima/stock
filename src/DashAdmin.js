import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import GroupIcon from '@mui/icons-material/Group';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import PersonOffIcon from '@mui/icons-material/PersonOff';
import { LineChart } from '@mui/x-charts/LineChart';
import { PieChart } from '@mui/x-charts/PieChart';
import * as React from 'react';
import SideBar from './SideBar';
import "./css/DashAdmin.css";
import profile from './images/prfl.jpg';
const DashAdmin = () => {
    //le nombre de produits consommees
    const QuantPrd = [10, 45, 35, 40, 12,35,50,100,14,50,40,35,55];
    //les donnees de consomation de produit par chaque structure
    const dataset = [
        {
          quant: 75    ,
         
          produit: 'Struct1',
        },
        {
            quant: 100 ,
          
          produit: 'Struct2',
        },
        {
            quant: 15,
         
          produit: 'Struct3',
        },
        {
            quant: 45,
         
          produit: 'Struct4',
        },
        {
            quant: 30,
         
          produit: 'Struct5',
        },
        {
            quant: 90,
         
          produit: 'Struct6',
        },
        {
            quant: 15,
         
          produit: 'Struct7',
        },
        
        
      ];
      
      //les donnees de BCI recu
      const BCI =[
        { id: 0, value: 10, label: 'Comptes activés' },
        { id: 1, value: 15, label: 'Comptes désactivés' },
        
      ];
      
    return ( 
        <div className="comptes">    
        <SideBar />
<div className="cmpt">   

<div className="top">
<div className="d2">
        <GroupIcon  fontSize='large'/>
        <div className="txt">
            <span>2000</span>
            <p>Comptes</p>
        </div>
    </div>
    <div className="d2">
        <HowToRegIcon  fontSize='large'/>
        <div className="txt">
            <span>1000</span>
            <p>Comptes activés</p>
        </div>
    </div>
    <div className="d2">
          <PersonOffIcon fontSize='large'/> 
    <div className="txt">
        <span>1000</span>
        <p>Comptes désactivés</p>
    </div>
    </div>
    <div className="d2">
          <ContentCopyIcon fontSize='large'/> 
    <div className="txt">
        <span>7</span>
        <p>Structures</p>
    </div>
    </div>
</div>
<div className="btmm">
<div className="lft">
        <div className="chrt1">
        <div className="ttl">
                <p className='chrtp'>Statistiques</p>
                    <span className='chrtT'>Fréquence de connexion</span>
                </div>
                <hr />
                

                    <LineChart
sx={{
  
  '& .css-ob3hb1-MuiAreaElement-root': {
    fill: "url('#myGradient')",
  },
}}
                
      xAxis={[{  scaleType: 'point', data: [ '','JAN', 'FEB', 'MAR', 'APR', 'MAY','JUN', 'JUL', 'AUG','SEP', 'OCT','NOV','DEC'] }]}
      series={[
        {
          showMark: false,
            area: 'true',
            
            //les donneed de y
            data: QuantPrd,color: ['#04F2E7'],
          
        },
      ]}
      width={775}
      height={310}
      
      grid={{  horizontal: true }}
    >
<defs>
        <linearGradient id="myGradient" gradientTransform="rotate(90)">
          <stop offset="5%" stopColor="#01C7BE" />
          <stop offset="30%" stopColor="#04F2E7" />
          <stop offset="95%" stopColor="#FFFFFF" />
        </linearGradient>
      </defs>

      </LineChart>
        </div>

        <div className="chrt2">
        <div className="ttl">
                <p className='chrtp'>Statistiques</p>
                    <span className='chrtT'>Les dernières connexions</span>
                </div>
                <hr />
               <div className="accounts">
                <div className="act1">
                  <img src={profile} alt=""  />
                  <span>Hocini Souha</span>
                  <span>s.hocini@esi-sba.dz</span>
                  <span>Consommateurs</span>
                </div>
                <div className="act1">
                  <img src={profile} alt=""  />
                  <span>Hocini Souha</span>
                  <span>s.hocini@esi-sba.dz</span>
                  <span>Consommateurs</span>
                </div>
               </div>
        </div>
</div>
<div className="rgt">
          <div className="ttl">
                <p className='chrtp'>Statistiques</p>
                    <span className='chrtT'>La consommation des produits</span>
                </div>
                <hr />
 
                <div className="chrtP">

                <PieChart 
               
               series={[
                 {
                   data: BCI, colorMap:{colors:['#041F5A', '#01C7BE']} , innerRadius: 70,
                 },
               ]}
               colors= {['#01C7BE ','#041F5A']}
               width={295}
               height={650}
               slotProps={{
                 legend: {
                   direction: 'column',
                   position: { vertical: 'bottom', horizontal: 'left' },
                   padding: 20,
                   labelStyle: {
                     fontSize: 14,
                     fill: '#615E83',
                     fontWeight: '700',
                   
                   },
                 },
                 
               }}
             />
                </div>
</div>

</div>
 </div>
        
</div>

     );
}
 
export default DashAdmin;