import requests

def schedule_skedpal(id_token):
  url = "https://api.skedpal.com/api/v3/scheduler/reschedule"

  payload = {}
  headers = {
    'authority': 'api.skedpal.com',
    'accept': 'application/json, text/plain, */*',
    'accept-language': 'en-US,en;q=0.9,vi;q=0.8,it;q=0.7,zh-CN;q=0.6,zh;q=0.5',
    'authorization': 'Bearer ' + id_token,
    'cache-control': 'no-cache',
    'content-length': '0',
    'origin': 'https://app.skedpal.com',
    'pragma': 'no-cache',
    'referer': 'https://app.skedpal.com/',
    'sec-ch-ua': '"Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36'
  }

  response = requests.request("POST", url, headers=headers, data=payload)

  print(response.text)

def get_token():
  url = "https://securetoken.googleapis.com/v1/token?key=AIzaSyCZkOvVzN_RCDEuKk_MXelrPxn5M2_dFGg"

  payload = 'grant_type=refresh_token&refresh_token=AMf-vByVekivAkAPbEIvO6nZLkdQtATlgjfqzT2xJMMnUg4nN3FG5ce8UUeTSGmUQiIutPv3o1EFFsFaFOA3I0dRFKEQqbKgK_FqnCeWOXlSGqYZaSEP5TGA9njSvsdIAqtsV0VrLPa_lzc2ivjmyzJqrdm3NHfhuitEcCQ06pIrsjSSQ4lRiR-gYLOEGzGPFofk7dPCuzsgwo06UuHHxQq5LhYsKNDNFVhAegWAKRt1XWrUmEtsSvuOoJJoeY4eu-Idn_bF4pRZqQ-WkYM-HK5QY-aRpryrbMPr-K8O6Z5wrILrndPWsGN4GhpJFZd5l90qtX_EHqFRkYO4aH5mmn_BPK8VYquEna8Z3Gw7brn91kfRcvMdzG0NmotLUZDFeMglx0zCplwwQO5-HtwiZXocMnBknlqeqg'
  headers = {
    'authority': 'securetoken.googleapis.com',
    'accept': '*/*',
    'accept-language': 'en-US,en;q=0.9,vi;q=0.8,it;q=0.7,zh-CN;q=0.6,zh;q=0.5',
    'cache-control': 'no-cache',
    'content-type': 'application/x-www-form-urlencoded',
    'origin': 'https://app.skedpal.com',
    'pragma': 'no-cache',
    'referer': 'https://app.skedpal.com/',
    'sec-ch-ua': '"Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'cross-site',
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36',
    'x-client-data': 'CI+2yQEIpbbJAQipncoBCJKEywEIlKHLAQiGoM0BCLnIzQEI3uvNAQiD8M0BGP2YzQEYp+rNARj58s0BGOuNpRc=',
    'x-client-version': 'Chrome/JsCore/9.9.4/FirebaseCore-web',
    'x-firebase-gmpid': '1:1037557042042:web:50890a8b7c862d8ee124c3'
  }

  response = requests.request("POST", url, headers=headers, data=payload)
  
  id_token = response.json()['id_token']
  return id_token

id_token = get_token()
schedule_skedpal(id_token)
