"use client"

import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import { Spinner } from "@/components/ui/spinner"

const Page = () => {

    const [prompt, setPrompt] = useState<string>('');
    const [imgUrl, setImgUrl] = useState<string>('');
    const [loading, setLoading] = useState(false);

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
            const result = await response.text();
            const parsedRes = JSON.parse(result);
            setImgUrl(parsedRes.result.data.results[1].origin);
            setLoading(false);
        } catch (error) {
            console.error(error);
        }
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await generateImage();
    }

    return (
        <div>
            <form
                className="m-24 flex flex-col gap-6"
                onSubmit={handleSubmit}
            >
                <input
                    type="text"
                    placeholder="write your prompt to generate images"
                    className="form-input"
                    onChange={(e) => setPrompt(e.target.value)}
                    required
                />
                <button
                    type="submit"
                    className="submit-btn"
                >Generate Image</button>
            </form>
            <div>
                { loading ?
                    <div className="spinner">
                        <Spinner />
                    </div> :
                    (
                        <div className="image-style">
                        <h1>Your Generated Image....</h1>
                        {imgUrl && (
                            <Image src={`${imgUrl}`} alt="Generated Image" width={512} height={500} />
                        )}
                    </div>
                ) }
            </div>
        </div>
    );
};

export default Page;