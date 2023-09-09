import requests
from data import username, password
url = "https://prv.tutor.com/nGEN/login.aspx?ProgramGUID=B611858B-4D02-4AFE-8053-D082BBC1C58E&ReturnUrl=%2fnGEN%2fTools%2fScheduleManager_v2%2fsetContactID.aspx%3fProgramGUID%3dB611858B-4D02-4AFE-8053-D082BBC1C58E%26UserGUID%3d745af293-8509-44a4-a24f-955ef52e6ca2"

payload = f'__VIEWSTATE=%2FwEPDwUKMTAyNzM3MjAyOQ9kFgICAw9kFgICAQ9kFgJmD2QWAgIBD2QWAmYPFgIeB1Zpc2libGVoZGQNoOnd35oN8QFpNZ6NpqbXWHdBgqUNtTX%2FXA%2BW1vyFFA%3D%3D&__VIEWSTATEGENERATOR=6CCF906F&__EVENTVALIDATION=%2FwEdAARgdUtPdww9a9fCfk9OMISwY3plgk0YBAefRz3MyBlTcHY2%2BMc6SrnAqio3oCKbxYaiTm7Wyf3OZQ4VfpDgXTTyYcwnJvOEwLo0B0h3s%2BYCYhZ9YC44UPYlBPUPAsTOLew%3D&txtUserName={username}&txtPassword={password}&butSignIn=Sign%20In'
headers = {
  'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
  'Accept-Language': 'en-US,en;q=0.9',
  'Cache-Control': 'no-cache',
  'Connection': 'keep-alive',
  'Content-Type': 'application/x-www-form-urlencoded',
  'Origin': 'https://prv.tutor.com',
  'Pragma': 'no-cache',
  'Referer': 'https://prv.tutor.com/nGEN/login.aspx?ProgramGUID=B611858B-4D02-4AFE-8053-D082BBC1C58E&ReturnUrl=%2fnGEN%2fTools%2fScheduleManager_v2%2fsetContactID.aspx%3fProgramGUID%3dB611858B-4D02-4AFE-8053-D082BBC1C58E%26UserGUID%3d745af293-8509-44a4-a24f-955ef52e6ca2',
  'Sec-Fetch-Dest': 'document',
  'Sec-Fetch-Mode': 'navigate',
  'Sec-Fetch-Site': 'same-origin',
  'Sec-Fetch-User': '?1',
  'Upgrade-Insecure-Requests': '1',
  'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
  'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
  'sec-ch-ua-mobile': '?0',
  'sec-ch-ua-platform': '"macOS"'
}

response = requests.request("POST", url, headers=headers, data=payload)

cookies = response.cookies.get_dict().get('ASP.NET_SessionId', '')