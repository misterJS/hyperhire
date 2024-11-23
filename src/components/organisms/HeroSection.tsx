import Typography from '../atoms/Typography';

export default function HeroSection() {
  return (
    <div className="bg-gradient-to-b text-white py-11 md:py-20">
      <div className="max-w-4xl mx-auto text-left space-y-8">
        <div className="relative inline-block md:bg-white bg-[#8BC4FF] text-white md:text-[#40E2E8] text-sm font-semibold px-4 py-2 rounded-md md:mb-6 animate-fadeInDown">
          풀타임, 파트타임
          <div className="absolute bottom-0 left-1/4 transform -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-[#8BC4FF] md:bg-white rotate-45"></div>
        </div>

        <h1 className="text-4xl font-bold md:mb-4 leading-tight animate-fadeIn">
          최고의 실력을 가진
          <br />
          외국인 인재를 찾고 계신가요?
        </h1>

        <Typography size="lg" color="white" className="font-medium md:mb-8 animate-fadeIn delay-300">
          법률 및 인사관리 부담없이
          <br />
          1주일 이내에 원격으로 채용해보세요.
        </Typography>

        <div className="hidden md:block bg-gradient-to-b py-10">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-white text-left">
            <div>
              <div className="border-t border-white mb-4 w-24 animate-fadeInUp"></div>
              <h3 className="text-lg font-bold mb-2 animate-fadeInUp delay-100">평균 월 120만원</h3>
              <Typography className="text-sm w-40 animate-fadeInUp delay-200">
                임금을 해당 국가별 기준으로 계산합니다.
              </Typography>
            </div>
            <div>
              <div className="border-t border-white mb-4 w-24 animate-fadeInUp delay-300"></div>
              <h3 className="text-lg font-bold mb-2 animate-fadeInUp delay-400">최대 3회 인력교체</h3>
              <Typography className="text-sm w-40 animate-fadeInUp delay-500">
                만약 처음에 팀에 맞지 않아도 걱정하지 마세요.
              </Typography>
            </div>
            <div>
              <div className="border-t border-white mb-4 w-24 animate-fadeInUp delay-600"></div>
              <h3 className="text-lg font-bold mb-2 animate-fadeInUp delay-700">평균 3일, 최대 10일</h3>
              <Typography className="text-sm w-40 animate-fadeInUp delay-800">
                급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다.
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
