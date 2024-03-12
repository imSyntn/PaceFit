import React from 'react'
import '../../Styles/Shop/ProductDetails.scss'
import { FaRegStar } from "react-icons/fa";

const ProductDetails = () => {
    return (
        <div className='ProductDetails'>
            <div className="imageDesc">
                <div className="left"></div>
                <div className="right">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque adipisci inventore dolor repellat neque ratione dolores ad officia omnis suscipit nemo temporibus facilis, fugiat quod quia nesciunt ipsa deserunt dolore. Sit provident inventore suscipit assumenda eum doloribus laboriosam quaerat placeat officia aperiam earum, beatae iusto, nesciunt temporibus quasi. Nesciunt assumenda reiciendis dolores animi a dicta explicabo alias provident accusamus eos quos ab ratione error suscipit nostrum quasi dolore omnis, quas facilis beatae porro laboriosam? Tenetur veritatis saepe quisquam deleniti autem assumenda voluptas nobis repellat! Tempore, quod iusto fugiat a dolores porro nulla quidem laborum ea, eos similique aut voluptate ipsam eius non illum. Maiores voluptatum quisquam cum ipsam nobis unde laboriosam dolore corrupti repellendus, optio delectus. Et ipsam voluptatibus vel minima sapiente itaque delectus eum totam aliquid magni. Asperiores rem consectetur aspernatur, culpa nihil perspiciatis cumque harum ut ea facere, laboriosam impedit tenetur, recusandae eligendi. Repellendus ipsam dolorem ullam excepturi recusandae quos debitis deserunt optio tempore repellat porro, dignissimos sequi amet consequuntur soluta mollitia! Quam natus ut quae voluptatibus cumque incidunt dolores architecto id numquam, qui ipsum corporis illum necessitatibus eos eum recusandae aliquid earum repudiandae aspernatur blanditiis reprehenderit? Consequuntur, eligendi? Ullam sed quo laboriosam nisi obcaecati, molestiae modi ducimus atque eos accusantium in corrupti aperiam labore iure odit distinctio architecto nam ad hic numquam impedit voluptates beatae? Harum quidem ducimus minus alias adipisci enim vel expedita ab doloribus error odio architecto distinctio placeat eveniet, magni dolorum sit aperiam aspernatur esse est ex voluptatem repellat! Temporibus, iste vero modi consectetur aut ratione illo recusandae dolore, ullam qui mollitia porro facere tempora. Quisquam recusandae dolores consectetur animi alias maiores aut? Ad quae, neque blanditiis error tenetur doloribus repellendus officiis cum reiciendis est ipsam explicabo a facere dignissimos rem nam laboriosam eum illo exercitationem saepe iusto eveniet eius fugit numquam? Veritatis vitae ea repellendus qui iusto amet nulla fuga corporis omnis optio rerum eos aspernatur id laboriosam, esse eaque porro doloremque deleniti at aut maxime accusamus nostrum laudantium? Vel eaque cum nobis veniam similique minus ipsum hic! Asperiores voluptatibus hic, laudantium, eius deleniti neque repellat dicta quis fugit minus, nesciunt ad facilis ipsa architecto consectetur reprehenderit ullam possimus consequatur sapiente assumenda animi! Debitis perspiciatis delectus saepe veniam neque explicabo blanditiis suscipit iste quis laboriosam architecto consectetur, dolorem praesentium. Rem accusamus tenetur officia cum placeat dolore velit ea, nisi reiciendis culpa eos dolores incidunt natus saepe exercitationem fugiat ab sed aliquam ullam debitis laborum qui. Inventore, quam unde doloremque neque, blanditiis veniam tempora mollitia nostrum, vero sed ex pariatur nemo? Tempora nemo officiis odio. Explicabo iusto ipsam omnis sunt eligendi, nemo, accusamus excepturi repellat id fuga necessitatibus ad at natus magni eveniet dolorum neque magnam veniam perspiciatis quam minima. Debitis reiciendis fugit itaque asperiores ex veniam doloribus ab! Et aliquid, asperiores velit itaque tempore dolores quia deleniti officia non? Quos eveniet tenetur ipsa temporibus eum optio eligendi rem, qui nulla illo voluptatum, impedit illum tempore autem labore voluptates aspernatur ullam. Quasi maxime sed aliquam, ipsum excepturi reiciendis voluptatem vitae aperiam incidunt earum molestiae?</p>
                </div>
            </div>
            <div className="reviews">
                <div className="cont">
                    <h1>Reviews</h1>
                    <div className="stars">
                        {
                            new Array(5).fill(" ").map((item, index) => (
                                <FaRegStar key={index} />
                            ))
                        }
                    </div>
                </div>
                <p>No reviews, submit one</p>
                <form action="">
                    <label htmlFor="text">Write</label>
                    <input type="text" name="text" id="" />
                </form>
            </div>
        </div>
    )
}

export default ProductDetails