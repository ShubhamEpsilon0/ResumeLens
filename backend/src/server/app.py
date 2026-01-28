from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from ..jd_extractor.JDExtractor import extractJobDescription

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

class JDData(BaseModel):
    url: str



@app.post("/")
async def root(jdData: JDData):
    jd = await extractJobDescription(jdData.url)
    return {"SummarizedJD": jd}




"""

For Extracting APIs into multiple files...

from fastapi import APIRouter

router = APIRouter()

@router.get("/items/")
def read_items():
    return [{"name": "Item 1"}, {"name": "Item 2"}]
"""