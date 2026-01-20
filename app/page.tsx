"use client"

import React from 'react';
import { useState } from 'react';
import { Spinner } from "@/components/ui/spinner"

const Page = () => {

    const [prompt, setPrompt] = useState<string>('');
    const [imgUrl, setImgUrl] = useState<string>('');
    const [loading, setLoading] = useState(false);

    // using rapidAPI's API
    const generateImage = async () => {
        setLoading(true);
        const url = 'https://ai-text-to-image-generator-flux-free-api.p.rapidapi.com/aaaaaaaaaaaaaaaaaiimagegenerator/quick.php';
        const options = {
            method: 'POST',
            headers: {
                'x-rapidapi-key': 'dd8c584ea4msh652a2adb06d1bc2p11b6f5jsn15a848c33627',
                'x-rapidapi-host': 'ai-text-to-image-generator-flux-free-api.p.rapidapi.com',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                prompt,
                style_id: 4,
                size: '1-1'
            }),
        };

        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error(`Failed to Generate Image: ${response.statusText}`);
            }
            const result = await response.text();
            const parsedRes = JSON.parse(result);
            setImgUrl(parsedRes.result.data.results[1].origin);
            setLoading(false);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    // Using Gemini API
    // const generateImageGemini = async () => {
    //     setLoading(true);
    //     try {
    //         const res = await fetch("/api/gemini", {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify({
    //                 prompt: prompt,
    //             })
    //         })
    //         if (!res.ok) {
    //             throw new Error(`Failed to Generate Image: ${res.statusText}`);
    //         }
    //         const parsedRes = await res.json();
    //         const { base64, mimeType } = parsedRes;
    //         const imgUrl = `data:${mimeType};base64,${base64}`;
    //         setImgUrl(imgUrl);
    //     } catch(error) {
    //         console.error(error);
    //     } finally {
    //         setLoading(false);
    //     }
    // }


    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await generateImage();
    }

    return (
        <div>
            <form
                className="m-24 gap-6 md:center-flex form"
                onSubmit={handleSubmit}
            >
                <input
                    type="text"
                    placeholder="write your prompt to generate images"
                    className="form-input"
                    onChange={(e) => setPrompt(e.target.value)}
                    required
                />
                <div className="center-flex">
                <button
                    type="submit"
                    className="submit-btn"
                    disabled={loading}
                >
                    {loading ? "Generating..." : "Generate Image"}
                </button>
                </div>
            </form>
            <div>
                { loading ?
                    <div className="center-flex">
                        <Spinner />
                    </div> :
                    (
                        <div className="image-div">
                        {imgUrl && (
                            <div className="center-flex gap-4">
                            <h1>Your Generated Image....</h1>
                            <img src={`${imgUrl}`} alt="Generated Image" width={550} height={550} />
                            </div>
                        )}
                    </div>
                ) }
            </div>
        </div>
    );
};

export default Page;