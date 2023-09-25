import { motion } from "framer-motion";

export function AnimateNow({children}) {
    return (
        <motion.div variants={{ hidden: { opacity: 0, y: 80 }, visible: { opacity: 1, y: 0 } }} initial="hidden" animate="visible"
            transition={{ duration: 0.8, delay: 0.25 }}>
                {children}
        </motion.div>
    )
}

export function AnimateAlert({children}, dur) {
    return (
        <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} initial="hidden" animate="visible"
            transition={{ duration: 1, delay: 0.25 }}>
                {children}
        </motion.div>
    )
}

export function AnimateHeader({children}, dur) {
    return (
        <motion.div variants={{ hidden: { opacity: 0, y: 0 }, visible: { opacity: 1, y: 0 } }} initial="hidden" animate="visible"
            transition={{ duration: 2, delay: 0.25 }}>
                {children}
        </motion.div>
    )
}

