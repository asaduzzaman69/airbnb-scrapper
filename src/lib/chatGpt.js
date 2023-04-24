1
const openAIKey = "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";




export const getReviewTone = async (review) => {
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + String(openAIKey),
        },
        body: JSON.stringify({
            model: "text-davinci-003",
            prompt: `Get the tone of this airbnb review: ${review}. like friendly, positive or negative or anything like that. return text with emoji`
            ,
            temperature: 0.1,
            max_tokens: 2000,
        }),
    };

    try {
        return await fetch(
            "https://api.openai.com/v1/completions",
            requestOptions
        )
            .then((res) => {
                return res.json();
            })
            .then((data) => {

                return data.choices[0].text

            });
    } catch (err) {
        console.log(err);
    }
};