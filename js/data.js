// js/data.js
const PROMPT_GALLERY = [
    {
    id: 1,
    title: "Scarlet Sorcerer Citadel",
    category: "Marvel",
    prompt: "Marvel style powerful sorcerer casting bright red hex magic shield patterns in front of a crumbling gothic skyscraper temple, explosive cinematic debris particles, ultra-detailed costume weaving, cinematic framing.",
    style: "Marvel Cinematic",
    lighting: "Explosive Crimson Energy",
    aspectRatio: "16:9",
    quality: "Ultra HD 8K",
    imageUrl: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80"
  },
  
  {
    id: 2,
    title: "Cyberpunk Alley Executive",
    category: "Cyberpunk",
    prompt: "A high-tech neon cyberpunk corporate leader walking down an illuminated wet dark alleyway in Tokyo, reflective clothing layers, soft purple volumetric light scatter, heavy cybernetic atmosphere, raytracing fidelity.",
    style: "Cyberpunk Realism",
    lighting: "Ambient Neon Glow",
    aspectRatio: "16:9",
    quality: "Max Quality Rendering",
    imageUrl: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    title: "Ethereal Elven Sorceress",
    category: "Fantasy",
    prompt: "A mystical fantasy profile shot of a royal elven queen casting soft golden spells inside an ancient glowing forest grove, fantasy realism, trending on artstation style design layout, octane renderer.",
    style: "High Fantasy Art",
    lighting: "Magical Light Glow",
    aspectRatio: "1:1",
    quality: "8K Resolution",
    imageUrl: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
   title: "Marvel Thunder Warrior",
    category: "Marvel",
    prompt: "Create an ultra-realistic cinematic portrait of a Marvel superhero wearing black stellar armor embedded with glowing blue lightning patterns, dramatic rain reflections, hyper volumetric environment lighting, detailed movie poster tracking composition, 8K resolution.",
    style: "Cinematic",
    lighting: "Volumetric / Neon",
    aspectRatio: "9:16",
    quality: "Ultra HD 8K",
    imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 5,
    title: "Cybernetic Geisha Android",
    category: "Cyberpunk",
    prompt: "An elegant cybernetic geisha with polished white ceramic skin plating, exposed glowing fiber-optic wires on neck, sitting under dim neon rain eaves, pink and cyan color grade, unreal engine 5 style.",
    style: "Futuristic Realism",
    lighting: "Split Cyan/Pink Neon",
    aspectRatio: "9:16",
    quality: "8K Octane Render",
    imageUrl: "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 6,
    title: "Neon Shinjuku Ronin",
    category: "Anime",
    prompt: "Vibrant high-contrast anime style illustration of a cyber ronin holding a glowing energy katana, wind blowing through dark techwear cape, floating kanji hologram graphics, clean line art style.",
    style: "Modern Anime",
    lighting: "Dynamic Backlight Glow",
    aspectRatio: "9:16",
    quality: "UHD Digital Canvas",
    imageUrl: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 7,
    title: "Ancient Dragon Mountain Temple",
    category: "Fantasy",
    prompt: "A colossal majestic elder dragon wrapped around a jagged snowy mountain peak temple, grand scale fantasy epic landscape painting, golden hour sun rays breaking through mountain clouds.",
    style: "Epic Landscape Fantasy",
    lighting: "Golden Hour Volumetric",
    aspectRatio: "16:9",
    quality: "Masterpiece Details",
    imageUrl: "https://images.unsplash.com/photo-1617396900799-f4ec2b43c7ae?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 8,
    title: "Midnight Street Racer Chase",
    category: "Cinematic",
    prompt: "Cinematic close up tracking shot of a matte black sports car drifting on wet city streets, anamorphic lens flare, motion blur tires, warm rim lighting highlights over metallic reflection surfaces.",
    style: "Action Cinematic",
    lighting: "Anamorphic Lens Rim Light",
    aspectRatio: "21:9",
    quality: "Photorealistic IMAX 35mm",
    imageUrl: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 9,
    title: "Wrinkled Wise Nomad Portrait",
    category: "Realistic",
    prompt: "Stunning documentary-style photorealistic portrait of an elderly desert nomad storyteller, deep intricate facial wrinkles, honest expressive eyes, soft diffused side natural window lighting, 85mm lens.",
    style: "Hyper-Realism Portrait",
    lighting: "Diffused Natural Daylight",
    aspectRatio: "1:1",
    quality: "Uncompressed Raw Photo",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 10,
    title: "Arachnid Nano-Tech Suit",
    category: "Marvel",
    prompt: "Detailed full-body render of a red and gold nano-tech spider superhero suit standing on top of a Manhattan skyscraper spire, glossy metallic surfaces reflecting city sunset sky, hyper-realistic cloth weaves.",
    style: "Cinematic CGI Concept",
    lighting: "Sunset Rim Lighting",
    aspectRatio: "9:16",
    quality: "8K Masterpiece",
    imageUrl: "https://images.unsplash.com/photo-1608889174637-3c44f6326f1a?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 11,
    title: "Neo-Seoul Netrunner Hub",
    category: "Cyberpunk",
    prompt: "Interior shot of a dark cyberpunk hacker den, multi-layered glowing transparent holographic monitor interfaces, bundles of exposed yellow wiring hanging from ceiling, retro computer terminals.",
    style: "Cyberpunk Environment",
    lighting: "Multi-colored Screen Illumination",
    aspectRatio: "16:9",
    quality: "Raytraced Engine Render",
    imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 12,
    title: "Ethereal Spirit Forest Spirit",
    category: "Anime",
    prompt: "Anime style digital concept art of a mythical white forest fox spirit running beside a glowing river, soft Studio Ghibli painterly background aesthetics, pastel watercolor textures.",
    style: "Painterly Anime",
    lighting: "Soft Luminescent Glow",
    aspectRatio: "16:9",
    quality: "High-Res Concept Canvas",
    imageUrl: "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 13,
    title: "Forgotten Sunken Kingdom",
    category: "Fantasy",
    prompt: "Breathtaking wide view of a ruined ancient city submerged deep underwater, schools of glowing fish swimming between cracked marble columns, beams of light breaking through ocean surface.",
    style: "Epic Fantasy Concept",
    lighting: "Underwater Volumetric Rays",
    aspectRatio: "16:9",
    quality: "8K Digital Matte Painting",
    imageUrl: "https://images.unsplash.com/photo-1544924222-35298d690376?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 14,
    title: "Sci-Fi Desert Outpost Landing",
    category: "Cinematic",
    prompt: "Wide cinematic establishing shot of a futuristic colony cargo spaceship landing on an orange sand desert planet, massive dust clouds blowing outwards, giant twin suns low on the horizon.",
    style: "Sci-Fi Cinematic",
    lighting: "Blazing Harsh Twin-Sun Setup",
    aspectRatio: "21:9",
    quality: "IMAX Feature Film Grade",
    imageUrl: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 15,
    title: "Rainy Cafe Glass Reflection",
    category: "Realistic",
    prompt: "Ultra realistic street photography shot of water droplets on a cafe window at night, blurry bokeh background of city traffic headlights, realistic macro focus on glass textures, professional camera look.",
    style: "Macro Realism",
    lighting: "Out-of-Focus Street Bokeh",
    aspectRatio: "1:1",
    quality: "Photorealistic 35mm Film",
    imageUrl: "https://images.unsplash.com/photo-1428908728789-d2de25dbd4e2?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 16,
    title: "Valkyrie Cosmic Battle",
    category: "Marvel",
    prompt: "Asgardian style warrior goddess raising a glowing sword amidst a chaotic cosmic nebula cloud space battle, golden armor reflections, shards of rainbow bifrost bridge floating around, cinematic concept.",
    style: "Comic Movie Aesthetic",
    lighting: "Iridescent Cosmic Nebula Light",
    aspectRatio: "16:9",
    quality: "8K Production Render",
    imageUrl: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 17,
    title: "Chinatown Flying Cars",
    category: "Cyberpunk",
    prompt: "Dystopian cyberpunk city block with massive vertically stacked neon store signs, flying delivery drones and sleek spinner cars moving through smoggy foggy air channels, hyper detailed view.",
    style: "Dystopian Cyberpunk",
    lighting: "Dense Fog Neon Scattering",
    aspectRatio: "16:9",
    quality: "Ultra HD Depth Rendering",
    imageUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 18,
    title: "Cyber Mecha Pilot Girl",
    category: "Anime",
    prompt: "Anime character art of a pink-haired tactical mech pilot sitting inside a dark cockpit, interface elements reflected across her eyes, sleek futuristic plugsuit detail, high aesthetic illustration.",
    style: "Sci-Fi Anime Mecha",
    lighting: "Instrument Panel Interface Glow",
    aspectRatio: "9:16",
    quality: "Super Fine Detailed 4K",
    imageUrl: "https://images.unsplash.com/photo-1560942485-b2a11cc13456?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 19,
    title: "Overgrown Lost Citadel",
    category: "Fantasy",
    prompt: "High fantasy scene of a massive fantasy castle hidden inside a giant underground cavern, ancient trees wrapping around stone spires, thousands of small glowing crystal clusters embedded in cave walls.",
    style: "Mystical Fantasy Architecture",
    lighting: "Bioluminescent Crystal Sparkles",
    aspectRatio: "16:9",
    quality: "8K Resolution Artstation",
    imageUrl: "https://images.unsplash.com/photo-1536746803623-cef87080bfc8?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 20,
    title: "Gritty Detective Office",
    category: "Cinematic",
    prompt: "1940s film noir detective office setting, dramatic window blind shadow patterns cast sharply across the desk and wall, smoky atmosphere, warm desk lamp contrasting against cold moonlit room details.",
    style: "Film Noir Cinematic",
    lighting: "High Contrast Chiaroscuro Shadows",
    aspectRatio: "4:3",
    quality: "Cinematic Grain 35mm Print",
    imageUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 21,
    title: "Dewdrops on Emerald Leaf",
    category: "Realistic",
    prompt: "Extreme macro close-up photograph of clear water dewdrops sitting perfectly balanced on a deep green tropical leaf structure, flawless veins, crisp focus, soft professional studio bokeh dropoff.",
    style: "National Geographic Realism",
    lighting: "Bright Clear Morning Sun",
    aspectRatio: "1:1",
    quality: "Ultra Sharp Hasselblad Shot",
    imageUrl: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 22,
    title: "Emerald Giant Monster Fight",
    category: "Marvel",
    prompt: "A giant raging emerald green brute monster smashing a modern asphalt city street road in half, cinematic dust fragments flying outwards, military vehicles flipping upside down, explosive layout.",
    style: "Marvel Action Scene",
    lighting: "Daylight Fire Explosion Backlight",
    aspectRatio: "16:9",
    quality: "VFX Production Masters",
    imageUrl: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 23,
    title: "Cyber Hacktivist Headset",
    category: "Cyberpunk",
    prompt: "Profile close-up shot of a street hacktivist wearing custom techwear visor goggles with scrolling matrix glyph text code animations across the lenses, smoky vapor backdrop, dark moody setting.",
    style: "Cyberpunk Techwear Art",
    lighting: "Vibrant Purple Screen Illumination",
    aspectRatio: "9:16",
    quality: "8K Raw Digital Asset",
    imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 24,
    title: "Cherry Blossom Samurai Temple",
    category: "Anime",
    prompt: "Beautiful aesthetic anime scenery landscape, a solitary warrior looking towards a sweeping pagoda castle compound, thousands of pink cherry blossom petals blowing violently across the screen layout.",
    style: "Makoto Shinkai Inspired Art",
    lighting: "Gleaming Brilliant Midday Sun",
    aspectRatio: "16:9",
    quality: "Vibrant Masterpiece Illustration",
    imageUrl: "https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 25,
    title: "Floating Sky Islands Palace",
    category: "Fantasy",
    prompt: "Majestic fantasy palace structures built on top of massive fractured islands floating high up in the blue sky, massive cascading waterfalls pouring down into the empty clouds below.",
    style: "High Fantasy Sky World",
    lighting: "Magical Ambient Sky Scattering",
    aspectRatio: "16:9",
    quality: "8K Premium Concept Sheet",
    imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 26,
    title: "Cyberpunk Capsule Hotel Room",
    category: "Cyberpunk",
    prompt: "Cozy interior view of a futuristic cyberpunk sleep pod capsule hotel room, packed dashboard consoles, tiny neon neon strip lighting systems, warm custom lofi bedroom comfort vibes.",
    style: "Cyberpunk Cosy Room",
    lighting: "Warm Orange Lofi Accent Glow",
    aspectRatio: "16:9",
    quality: "8K Hyper-Real Environment",
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 27,
    title: "Steaming Hot Ramen Counter",
    category: "Anime",
    prompt: "Gorgeous hand-drawn anime food close up art of a piping hot bowl of fresh pork ramen noodles, glistening broth swirls, realistic steaming vapors rising up towards shop counter wooden frames.",
    style: "Anime Food Art",
    lighting: "Warm Retro Street Stand Bulb",
    aspectRatio: "4:3",
    quality: "Ultra High Detail Hand-Drawn",
    imageUrl: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 28,
    title: "Wandering Fire Knight Sentinel",
    category: "Fantasy",
    prompt: "Dark fantasy full body concept portrait of a massive iron knight sentinel wandering inside a lava cavern, volcanic ash drifting, cracks in armor glowing with hot magma energy.",
    style: "Dark Fantasy Grimdark",
    lighting: "Intense Bottom Lava Magma Glow",
    aspectRatio: "9:16",
    quality: "ZBrush Master Presentation Model",
    imageUrl: "https://images.unsplash.com/photo-1618005198143-e5283b519a7f?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 29,
    title: "Deep Space Astronaut Drift",
    category: "Cinematic",
    prompt: "A lonely astronaut floating completely untethered out in wide empty dark deep space, reflection of a beautiful massive blue earth globe showing on the visor helmet lens glass, wide shot.",
    style: "Sci-Fi Space Cinematic",
    lighting: "Brilliant White Cosmic Sunlight",
    aspectRatio: "16:9",
    quality: "Hasselblad Space Photography Look",
    imageUrl: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 30,
    title: "Vintage Leather Boots Close-up",
    category: "Realistic",
    prompt: "A masterfully captured close up still life photo of seasoned weathered brown leather working boots resting on an old rustic hardwood floor frame, dusty light beams passing through, authentic textures.",
    style: "Commercial Still Life Realism",
    lighting: "Moody Cinematic Window Rays",
    aspectRatio: "1:1",
    quality: "Ultra-Sharp Raw Photo Grade",
    imageUrl: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 31,
    title: "Vibrant Synthwave Highway Grid",
    category: "Cyberpunk",
    prompt: "An out-of-this-world neon synthwave retro landscape wireframe grid road driving into a massive vector wireframe glowing sunset sun, purple mountain side geometry silhouettes, vaporwave asset style.",
    style: "Synthwave / Outrun Vector Art",
    lighting: "Blazing Neon Purple Edge-Lines",
    aspectRatio: "16:9",
    quality: "Crisp Clean Digital Design Layer",
    imageUrl: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 32,
    title: "Steampunk Airship Docking Harbor",
    category: "Fantasy",
    prompt: "Grand steampunk city design layout with complex brass mechanisms, vintage giant airships docking to stone tower platform towers, giant copper gears rotating slowly in morning light clouds.",
    style: "Steampunk High Fantasy",
    lighting: "Warm Sepia Cloud Atmospheric Tone",
    aspectRatio: "16:9",
    quality: "8K Premium Architectural Concept",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 33,
    title: "Cinematic Cold Mountain Cabin",
    category: "Cinematic",
    prompt: "Moody atmospheric establishing wide shot of a small remote dark cabin built on the edge of a pine forest under dark dramatic stormy clouds, a tiny warm yellow light coming from cabin windows.",
    style: "Suspense/Thriller Cinematic",
    lighting: "Deep Cold Overcast Mood Contrast",
    aspectRatio: "21:9",
    quality: "Arri Alexa Cinematic Output",
    imageUrl: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 34,
    title: "Fresh Morning Espresso Pour",
    category: "Realistic",
    prompt: "A perfect commercial food photography close up capture of dark rich espresso coffee streaming into a smooth matte ceramic mug container, tiny micro foam air bubbles texturing the surface.",
    style: "Commercial Food Realism",
    lighting: "Crisp Clean Industrial Rim Studio Lighting",
    aspectRatio: "1:1",
    quality: "100MP Digital Medium Format Shot",
    imageUrl: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 35,
    title: "Interstellar Shield Generator Command",
    category: "Cinematic",
    prompt: "Wide angle perspective view inside a premium sci-fi starship command center deck, looking out a colossal panoramic viewport glass window showcasing a blue galaxy ring system vortex structure.",
    style: "Sci-Fi Space Opera Interior",
    lighting: "Deep Ambient Console Neon Strips Blue",
    aspectRatio: "16:9",
    quality: "Industrial Light and Magic Standard",
    imageUrl: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 36,
    title: "Devotional Krishna Mural Portrait",
    category: "Realistic",
    // Extracted and optimized directly from image_db32a5.jpg referencing image_db32c1.jpg
    prompt: "Ultra-realistic full-body portrait of a young Indian man standing casually in front of a giant Lord Krishna mural painted on an old weathered wall. The man is smiling warmly at the camera, holding a traditional wooden flute in one hand, one hand in pocket, relaxed crossed-leg pose. He wears a royal blue satin button-down shirt, light-wash wide-leg denim jeans, no shoes, minimal accessories. Behind him is a breathtaking mural of Lord Krishna with blue skin, intricate golden crown adorned with gemstones, peacock feather, floral garlands, and a flute. The mural fills the entire background, painted in rich blue, teal, gold, and pink tones with fine artistic details and devotional aesthetic. Wet reflective pavement after rain, scattered flower petals on the ground, cinematic reflections, shallow depth of field, soft overcast daylight, natural color grading, highly detailed skin texture, realistic fabric folds, editorial fashion photography, spiritual cultural atmosphere, premium portrait photography, 85mm lens, f/2.0, ultra-sharp focus, photorealistic, HDR, 8K quality, masterpiece.",
    style: "Luxury Editorial Portrait / Devotional Art",
    lighting: "Soft Overcast Daylight with Wet Reflections",
    aspectRatio: "3:4",
    quality: "Photorealistic HDR 8K",
    imageUrl: "images/krishna_mural_portrait.jpg" // Replace with your local asset path or image server URL
  },
  {
    id: 37,
    title: "Multi-Outfit Glass Panel Collage",
    category: "Cinematic",
    // Extracted and optimized directly from image_db3266.jpg referencing image_db326d.jpg
    prompt: "A cinematic 8K digital poster of a young man with thick messy hair and a goatee, wearing sunglasses, a red button-down shirt over an inner white t-shirt, white baggy pants, white sneakers, and a smart watch. He stands centrally amidst glowing floating glass panels displaying various portraits of himself in different colored outfits. The atmosphere is moody with white glowing leaves, ground fog, and a dark urban bokeh background. High-contrast lighting, sharp details, and a modern magazine-collage aesthetic.",
    style: "Modern Magazine Collage / Urban Cinematic",
    lighting: "High-Contrast with Glowing Panel Illumination",
    aspectRatio: "1:1",
    quality: "8K Ultra Digital Poster",
    imageUrl: "images/glass_panels_collage.jpg" 
  },
  {
    id: 38,
    title: "Mahabharata Golden Chariot Gallery",
    category: "Fantasy",
    // Custom tailored prompt matching the exact composition of image_db3245.jpg
    prompt: "A young Indian girl wearing a traditional blue and orange lehenga with a white jasmine flower garland (gajra) in her hair, standing with her back to the camera inside a luxurious dark wood palace corridor. She is looking up in awe at a massive, ornately framed golden painting on the wall. The painting depicts an epic Mahabharata scene of Lord Krishna acting as the charioteer for Arjuna on a grand golden chariot drawn by four powerful, galloping white horses into a battlefield under a dramatic golden sunlit sky filled with clouds. Volumetric golden hour rays filter through the hall, casting warm reflections across the polished wooden floor.",
    style: "Epic Historical Realism / Royal Interior Portrait",
    lighting: "Volumetric Golden Hour Glow",
    aspectRatio: "4:5",
    quality: "Masterpiece Cinematic Painting",
    imageUrl: "images/mahabharata_chariot_gallery.jpg"
  },
  {
    id: 39,
    title: "Introspective Smoke Particle Dispersion",
    category: "Realistic",
    // Extracted and optimized directly from image_db3227.jpg
    prompt: "Create an ultra-realistic, cinematic 8K image with high-contrast dramatic lighting and a photo-real digital painting aesthetic. A man is shown in a full-body side profile facing right, his face and hairstyle rendered with no alterations. He wears modern casual streetwear; a light grey crewneck t-shirt, light neutral cargo pants, light-colored high-top boots, and a watch on his left wrist. His posture is slightly slumped, head bowed, eyes looking downward, hands relaxed at his sides, conveying deep introspection and sorrow. Nearly half of his body is dissolving into extremely thick, cloud-like grey smoke filled with glowing yellow dust particles. His left arm, shoulder, torso, legs, and part of his hair become transparent as they break into luminous particles, suggesting active disintegration. Behind and partially surrounding him is a massive glowing crescent (C-shaped) energy aura, emitting fiery golden-white plasma light. This aura acts as a powerful rim and backlight, highlighting the smoke, dust, and silhouette. The setting is minimal and stark: a concrete or desolate paved surface meeting a heavily overcast sky. The color palette is nearly monochrome greys and whites, contrasted by intense amber-gold glow. Shallow depth of field, glow/bloom lighting, particle dispersion, cinematic composition, emotional and dramatic atmosphere.",
    style: "Hyper-Realistic Particle Dispersion / Emotional Surrealism",
    lighting: "Fiery Golden-White Plasma Rim Backlight",
    aspectRatio: "4:5",
    quality: "Ultra High-Fidelity VFX Render",
    imageUrl: "images/smoke_dispersion_introspection.jpg"
  },
  {
  id: 40,
  title: "Vibrant Spiritual Mural Blend",
  category: "Realistic",
  prompt: "[Link Your Image Here] / A photo-real digital painting blending the user's face and casual standing pose seamlessly. Replace the original background completely with a massive, highly detailed mural of Lord Shiva with glowing third-eye energy, painted in deep cosmic blues, golds, and royal purples on a weathered concrete street wall. The ground is a wet, rain-slicked pavement reflecting the brilliant colors of the wall art. Sharp focus on the user, shallow depth of field, high-contrast cinematic lighting, editorial portrait style, 8K resolution.",
  style: "Cultural Editorial Portrait",
  lighting: "Rain-Slicked Street Reflections",
  aspectRatio: "3:4",
  quality: "Ultra HD 8K Masterpiece"
},
{
  id: 41,
  title: "Cyberpunk Hologram Matrix",
  category: "Cyberpunk",
  prompt: "[Link Your Image Here] / Use the exact face and hair of the user from the uploaded image. Place them centrally in a full-body streetwear outfit. The simple background is completely replaced by a dark, misty cyberpunk alleyway filled with floating, glowing glass panels. Each glass panel projects a different color-graded photographic portrait of the user's face. Moody atmosphere with ground fog, floating neon particles, dramatic rim lighting, magazine-collage aesthetic.",
  style: "Sci-Fi Urban Collage",
  lighting: "Neon Cybernetic Screen Glow",
  aspectRatio: "1:1",
  quality: "Max Quality Render"
},
{
  id: 42,
  title: "Surreal Energy Dust Dissolve",
  category: "Cinematic",
  prompt: "[Link Your Image Here] / Maintain the user's side-profile face and hairstyle perfectly. Completely remove the original background and replace it with a dark, stark, overcast desolate paved landscape. Half of the user's body actively dissolves into thick, cloud-like grey smoke embedded with hundreds of glowing amber-gold dust particles. Behind the user, a massive glowing C-shaped plasma crescent aura emits intense golden-white light, acting as a powerful rim light highlighting the smoke silhouette.",
  style: "Emotional Surrealism / VFX",
  lighting: "Fiery Plasma Rim Backlight",
  aspectRatio: "4:5",
  quality: "8K Production Grade VFX"
},
{
  id: 43,
  title: "Cyberpunk Hologram Matrix",
  category: "Cyberpunk",
  prompt: "[Link Your Image Here] / Use the exact face and hair of the user from the uploaded image. Place them centrally in a full-body streetwear outfit. The simple background is completely replaced by a dark, misty cyberpunk alleyway filled with floating, glowing glass panels. Each glass panel projects a different color-graded photographic portrait of the user's face. Moody atmosphere with ground fog, floating neon particles, dramatic rim lighting, magazine-collage aesthetic.",
  style: "Sci-Fi Urban Collage / Cyberpunk Realism",
  lighting: "Neon Cybernetic Screen Glow & Moody Rim Light",
  aspectRatio: "1:1",
  quality: "8K Ultra Digital Poster / Raytraced Render",
  imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80"
}

];