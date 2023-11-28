import firstIMg from '@/assets/team/customer1.jpeg'
import secondIMg from '@/assets/team/customer2.jpeg'




 const Team = () => {
    const state = [
        {
            img: firstIMg,
            name: 'Martin Guptill',
            position: 'Senior at Business',
        },
        {
            img: secondIMg,
            name: 'Martin Guptill',
            position: 'Senior at Business',
        },
        {
            img: secondIMg,
            name: 'Martin Guptill',
            position: 'Senior at Business',
        },
        {
            img: secondIMg,
            name: 'Martin Guptill',
            position: 'Senior at Business',
        }
    ];

    return (
        <div style={{ display: 'flex', flexDirection: 'column', paddingTop: '5rem', alignItems: 'center', justifyContent: 'center',width: '100%' }} id='Team'>
            <div >
            <h4 style={{ textAlign: 'center', margin: 'auto', fontSize:'3rem' }}>
                    Meet our team of Proffesionals
                </h4>
            </div>
            <div
                style={{ display: 'flex', flexDirection:'row',alignItems:'center',justifyContent:'space-around', gap:'2rem', padding: '5rem',  }}>
                {state.map((el, index) => {
                    return (
                        <div key={index} className="">
                            <img src={el.img}
                                style={{ height: '22.5rem', width: '20rem' }} />
                            <div className="flex items-center justify-between pt-4"
                                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '2rem' }}>
                                <div>
                                    <h4 >
                                        {el.name}
                                    </h4>
                                    <span>
                                        {el.name}
                                    </span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Team