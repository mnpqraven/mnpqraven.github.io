//const { data: sid, pending, refresh } = await useLazyFetch('http://{{ipv6}}:{{port}}/webapi/query.cgi?api=SYNO.API.Auth&method=login&version=3&account={{user}}&passwd={{password}}&session=test&format=sid')

// const useUser = ''
// const usePassword = ''
// const useIpv6= ``
// const usePort = 5000
// 
// 
// export default defineEventHandler(event => {
// const query = useQuery(event)
// return {
//   api: "SYNO.API.Auth",
//   method: "login",
//   version: 3,
//   account: query.account,
//   passwd: query.passwd,
//   format: "sid"
// }
// })