import { useState } from "react";
import { MainPane } from "../MainPane";
import { SideMenu } from "../SideMenu";
import { AnimatePresence } from "framer-motion";

const Content = () => {

    return (
        <section className="flex-1 flex">
            <AnimatePresence>
                <SideMenu/>
            </AnimatePresence>
           
            <MainPane/>
        </section>
    )
}

export default Content;