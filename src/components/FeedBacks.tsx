import PersonIcon from '@mui/icons-material/Person';
import StarIcon from '@mui/icons-material/Star';
import constants from "@/constants";

const AutoScrollFeedBacks = () => {
    const feedbacks = constants.feedbacks.concat(constants.feedbacks)
    if (feedbacks) {
        return (
            <div className="marquee p-10">
                <div className="marquee__inner">
                    <div className="marquee__group">
                        {
                            feedbacks.map((e, index) => {
                                return (
                                    <div className="w-[400px] flex flex-col gap-[10px] shadow-xl/30 p-10 rounded-xl" key={`Feedback-${index}`}>
                                        <div className="w-full flex items-center gap-5">
                                            <div className={`w-13 h-13 rounded-full flex justify-center items-center ${e.profileColor}`}><PersonIcon sx={{ fontSize: 25, color: 'white' }} /></div>
                                            <div className="w-2/3">
                                                <div className="font-bold text-lg">{e.name}</div>
                                                <div className="text-gray-500">{e.location}</div>
                                            </div>
                                        </div>
                                        <div className="text-lg text-gray-700 min-h-2/3">{e.feedback}</div>
                                        <div className="">{Array.from({ length: 5 }).map((_, i) => {
                                            return (
                                                <StarIcon key={`Star-${i}`} sx={{ color: 'orange' }} />
                                            )
                                        })}</div>
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div className="marquee__group">
                        {
                            feedbacks.map((e, index) => {
                                return (
                                    <div className="w-[400px] flex flex-col gap-[10px] shadow-xl/30 p-10 rounded-xl" key={`Feedback-${index}`}>
                                        <div className="w-full flex items-center gap-5">
                                            <div className={`w-13 h-13 rounded-full flex justify-center items-center ${e.profileColor}`}><PersonIcon sx={{ fontSize: 25, color: 'white' }} /></div>
                                            <div className="w-2/3">
                                                <div className="font-bold text-lg">{e.name}</div>
                                                <div className="text-gray-500">{e.location}</div>
                                            </div>
                                        </div>
                                        <div className="text-lg text-gray-700 min-h-2/3">{e.feedback}</div>
                                        <div className="">{Array.from({ length: 5 }).map((_, i) => {
                                            return (
                                                <StarIcon key={`Star-${i}`} sx={{ color: 'orange' }} />
                                            )
                                        })}</div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

        )
    }
}

const FeedBacks = () => {
    return (
        <div className="w-full py-20">
            <div className="max-w-7xl mx-auto flex flex-col items-center gap-7">
                <div className="w-full text-center lg:text-6xl text-4xl font-bold">What Our Guests Say</div>
                <div className="w-full text-center lg:text-2xl text-xl text-gray-500">Authentic experiences, lasting memories </div>
                <AutoScrollFeedBacks />
            </div>
        </div>
    )
}

export default FeedBacks