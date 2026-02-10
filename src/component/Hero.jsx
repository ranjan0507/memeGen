import { useState ,useRef, useEffect } from "react";
import { Upload, Shuffle, Maximize2, Minimize2,Droplet} from "lucide-react";

function Hero() {
	const [topText, setTopText] = useState("");
	const [bottomText, setBottomText] = useState("");
	const [img, setImg] = useState("src/assets/image.png");
	const [isExpanded, setIsExpanded] = useState(false);
	const [color,setColor] = useState("white");
	const [memes,setMemes] = useState([]) ;

	const handleImageChange = (event) => {
		const file = event.target.files[0];
		if (file) {
			const imageUrl = URL.createObjectURL(file);
			setImg(imageUrl);
		}
	};

	const openFileExplorer = () => {
		document.getElementById("fileInput").click();
	};

	const colorInputRef = useRef(null);

	const changeColor = () => {
		if (colorInputRef.current) {
			colorInputRef.current.click(); 
		  }
	}

	const getImg = () => {
		const rand = Math.floor(Math.random()*memes.length)
		setImg(memes[rand].url) ;
		setBottomText('') ;
		setTopText('') ;
	}

	useEffect(()=>{
			fetch('https://api.imgflip.com/get_memes')
			.then(res => res.json())
			.then((dat)=> setMemes(dat.data.memes))
	},[])
	
	return (
		<div className="py-8 px-4 sm:px-6 lg:px-8">
			<div className="max-w-7xl mx-auto">
				<div className="flex flex-wrap items-start justify-center gap-8 lg:gap-12">

					<div className="w-full max-w-md flex flex-col gap-6">
						
						<div className="bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-700">
							<div className="space-y-6 relative">
							<div className="absolute top-[-15px] right-[-10px] z-10 ">
								<input 
								value={color}
								type="color"
								className="hidden absolute top-0 right-0"
								ref={colorInputRef}
								onChange={(e)=>setColor(e.target.value)}
								>
								</input>
								<button
									onClick={changeColor}
									className="p-2 bg-gray-900/80 rounded-lg hover:bg-gray-900 transition-colors text-gray-300 hover:text-purple-400"
								>
									<Droplet size={20} />
								</button>
							</div>
								<div className="space-y-2">
									<label htmlFor="top" className="block text-sm font-medium text-gray-300">
										Top Text
									</label>
									<input
										type="text"
										name="top"
										placeholder="Enter top text"
										className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
										value={topText}
										onChange={(e) => setTopText(e.target.value)}
									/>
								</div>

								<div className="space-y-2">
									<label htmlFor="bottom" className="block text-sm font-medium text-gray-300">
										Bottom Text
									</label>
									<input
										type="text"
										name="bottom"
										placeholder="Enter bottom text"
										className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
										value={bottomText}
										onChange={(e) => setBottomText(e.target.value)}
									/>
								</div>
							</div>
						</div>

						
						<div
							className={`bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-700 transition-all duration-300 w-full mt-4`}
						>
							<div className="space-y-4">
								<input
									type="file"
									id="fileInput"
									accept="image/*"
									className="hidden"
									onChange={handleImageChange}
								/>
								<button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer" onClick={openFileExplorer}>
									<Upload size={20} />
									Select Image
								</button>

								<button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer" onClick={getImg}>
									<Shuffle size={20} />
									Random Image
								</button>
							</div>
						</div>
					</div>

					
					<div className="relative">
						<div
							className={`relative bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-700 transition-all duration-300 ${isExpanded ? "w-[600px] h-[600px]" : "w-[400px] h-[400px]"
								}`}
						>
							<div className="absolute top-4 right-4 z-10 flex gap-2">
								<button
									onClick={() => setIsExpanded(!isExpanded)}
									className="p-2 bg-gray-900/80 rounded-lg hover:bg-gray-900 transition-colors text-gray-300 hover:text-purple-400"
									title={isExpanded ? "Minimize" : "Maximize"}
								>
				     		{isExpanded ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
								</button>
							</div>

							<div className="relative w-full h-full cursor-default select-none">
								<img
									src={img}
									alt="Meme Preview"
									className="w-full h-full object-contain pointer-events-none"
								/>
								{topText && (
									<div className="absolute top-4 left-0 right-0 text-center px-4 pointer-events-none">
										<h2 className="text-3xl font-bold uppercase tracking-wider drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]" style={{color:`${color}`}}>
											{topText}
										</h2>
									</div>
								)}
								{bottomText && (
									<div className="absolute bottom-4 left-0 right-0 text-center px-4 pointer-events-none">
										<h2 className="text-3xl font-bold uppercase tracking-wider drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]" style={{color:`${color}`}}>
											{bottomText}
										</h2>
									</div>
								)}
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>
	);
}

export default Hero;
