from .llmSettings import LLMSettings, LLMModels
from tenacity import retry, stop_after_attempt, wait_exponential

class LLMOps:
    @retry(
        stop=stop_after_attempt(3),
        wait=wait_exponential(min=1, max=10),
    )
    async def CompleteChat(
            systemPrompt: str,
            userPrompt: str,
            model: LLMModels,
            history: list =[],
        ):
        try:
            # if model not in LLMModels.__members__:
            #     raise ValueError("UnsupportedModelException")
        
            history.append({"role": "user", "content": userPrompt})
            messages = [
                *history,
            ]

            chatResponse = await LLMSettings.openRouter.responses.create(
                model=model.value,
                instructions=systemPrompt,
                input=messages,
            )

            history.append({"role": "assistant", "content": chatResponse.output[0].content[0].text})
            return chatResponse.output[0].content[0].text
        except Exception as e:
            print("=====================================================",e)
            # Log Event Here
            return ""
        