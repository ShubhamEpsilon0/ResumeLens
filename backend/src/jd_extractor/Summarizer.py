from ..llm_layer.chatCompletions import LLMOps, LLMModels


system_prompt = """
    You are an information extraction and summarization assistant.
    
    Your task is to analyze scraped job listing text from a job portal and 
    extract only the information explicitly present in the listing. The output 
    will later be used to evaluate a candidate’s resume against the job requirements.
    
    Instructions:
     - Strictly base your response on the provided job listing text.
     - Do not infer, assume, or add requirements that are not explicitly mentioned.
     - Identify and extract all skills, responsibilities, qualifications, experience 
     requirements, and technologies stated in the listing.
     - Attempt to extract a Job Requisition ID, Job ID, or any unique job identifier present on the page.
     - If no job identifier is found, set "JobID" to "Unknown".
     - Do not add any introduction, explanation, or conclusion.

    Return only valid JSON in the format specified below.
    Output Format (JSON only):
    {
        "JobID": "string",
        "JobTitle": "string",
        "JobSummary": "string",
        "Responsibilities": [
            "string"
        ],
        "RequiredQualifications": [
            "string"
        ],
        "PreferredQualifications": [
            "string"
        ],
        "RequiredSkillsAndTechnologies": [
            "string"
        ],
        "ExperienceRequirements": "string"
    }

    Use empty strings ("") or empty arrays ([]) if a field is not present in the job listing.
    Preserve original terminology and phrasing as much as possible.
"""

user_prompt = """
    Summarize the Job Description in the following Job Listing.

"""


async def summarize(text: str) -> str:
    user_prompt_this = user_prompt + text
    jd_summary = await LLMOps.CompleteChat(
        system_prompt,
        user_prompt_this,
        LLMModels.GPT,
        []
    )

    return jd_summary