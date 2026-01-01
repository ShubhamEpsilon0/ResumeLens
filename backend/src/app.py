from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    return {"message": "Hello World"}




"""

For Extracting APIs into multiple files...

from fastapi import APIRouter

router = APIRouter()

@router.get("/items/")
def read_items():
    return [{"name": "Item 1"}, {"name": "Item 2"}]
"""