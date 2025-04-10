import React from "react";
import { Text, Img } from "..";

export default function HomeColumnBetter({
  style,
  image = "images/img_megaphone.svg",
  text = " Better Visibility",
  text1 = "List your carwash service on Washta, and reach more customers easily. Select the areas in our app covered by your team (such as public, mall, residential parking) and increase your revenue.",
  ...props
}) {
  return (
    <div {...props} style={{background:'white',zIndex:99,height:'17em'}}>
      <Img src={image} alt="better" className="h-[72px] w-[72px]" style={style} />
      <Text  size="lg" as="p" className="ml-[7px] mt-[13px] font-neuemontreal !text-black-900 md:ml-0"style={{fontSize:'28px',fontFamily:"NeueMontreal"}} >
        {text}
      </Text>
      <p size="xs" as="p" className="mt-[5px] w-full  font-neuemontreal font-light pl-[0.5em] leading-5" style={{fontSize:'14px',fontFamily:'NeueMontreal'}}>
        {text1}
      </p>
    </div>
  );
}
