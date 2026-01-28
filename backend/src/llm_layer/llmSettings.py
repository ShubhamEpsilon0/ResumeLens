import os
from openai import AsyncOpenAI
from dotenv import load_dotenv
from dataclasses import dataclass
from enum import Enum

load_dotenv(override=True)

class LLMModels(Enum):
    GPT = "openai/gpt-4o-mini"
    GEMINI = "google/gemini-2.5-pro"
    CLAUDE = "anthropic/claude-haiku-4.5"
    DEEPSEEK = "deepseek/deepseek-v3.2"


openrouter_api_key = os.getenv('OPENROUTER_API_KEY')
openrouter_url = "https://openrouter.ai/api/v1"

@dataclass
class LLMSettings:
    openRouter = AsyncOpenAI(base_url=openrouter_url, api_key=openrouter_api_key, timeout=30.0)