import img1 from '../../assets/images/img1.png'
import img2 from '../../assets/images/img2.png'
import img3 from '../../assets/images/img3.png'
import img4 from '../../assets/images/img4.png'

const BannerMarquee = () => {
    return (
        <div className='flex items-center justify-center gap-20'>
            <img className='w-28' src={img1} alt="" />
            <img className='w-20' src={img2} alt="" />
            <img className='w-28' src={img3} alt="" />
            <img className='w-20' src={img4} alt="" />
        </div>
    );
};

export default BannerMarquee;