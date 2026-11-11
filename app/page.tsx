'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, 
  Sparkles, 
  BookOpen, 
  ShieldCheck, 
  Quote, 
  ChevronDown, 
  Award, 
  Check, 
  Copy,
  Clock,
  Compass
} from 'lucide-react';

/* =========================================================================
   PHASE 1: CẤU TRÚC DỮ LIỆU (DATA STRUCTURE)
   ========================================================================= */

export const IMAGE_1_HERO = '/images/banner-tri-an.jpg'; 
export const IMAGE_2_PORTRAIT = '/images/co-kim-luu-portrait.jpg';

export const TRIBUTE_DATA = {
  teacher: {
    name: 'Cô Lương Thị Kim Lưu',
    role: 'Giáo viên Chủ nhiệm',
    subject: 'Giáo dục Kinh tế và Pháp luật',
    school: 'Trường THPT Xuân Đỉnh',
    classCohort: 'Tập thể Lớp 12A15 (Niên khóa K65)',
    timeline: 'Hơn 1000 ngày gắn bó (2022 - 2025)',
  },
  hero: {
    badge: 'TRI ÂN NGƯỜI LÁI ĐÒ A15K65 • THPT XUÂN ĐỈNH',
    title: 'Hơn 1000 Ngày Trọn Vẹn Cùng Cô Lương Thị Kim Lưu',
    subtitle: 'Nơi tri thức pháp luật song hành cùng lòng bao dung và tình thương thầm lặng.',
  },
  stories: [
    {
      id: 'chapter-1',
      number: '01',
      title: 'Tâm Hồn Hướng Thiện & Bản Lĩnh Người Thầy',
      subtitle: 'Kiến thức vững vàng đằng sau vẻ ngoài ít bộc lộ',
      icon: BookOpen,
      content: `Cô là một người giáo viên có tâm hồn hướng thiện thuần khiết. Có thể cô không phải là người khéo léo dùng lời hoa mỹ hay dễ dàng bộc lộ cảm xúc ra bên ngoài, nhưng trên bục giảng, cô luôn hiện diện với nền tảng kiến thức chuyên môn cực kỳ vững vàng. Từng giờ dạy Giáo dục Kinh tế và Pháp luật luôn được cô chuẩn bị chu toàn, nghiêm cẩn và đầy trách nhiệm, dạy cho chúng em không chỉ kiến thức để làm bài thi mà là bản lĩnh làm người, sự tôn trọng pháp luật và chuẩn mực sống.`,
      highlight: 'Sự nghiêm khắc là trách nhiệm, còn tri thức vững chãi là món quà lớn nhất cô trao gửi cho chúng em.',
    },
    {
      id: 'chapter-2',
      number: '02',
      title: 'Góc Khuất Của 2 Năm Đầu Tiên',
      subtitle: 'Sự kiên nhẫn phi thường trước 9 mảnh ghép đặc biệt',
      icon: ShieldCheck,
      content: `Hơn 1000 ngày cùng nhau là ngần ấy thời gian tập thể A15 thấu hiểu những áp lực vô hình đè nặng lên vai cô. Đặc biệt trong suốt hai năm đầu tiên đầy sóng gió, khi lớp đón nhận tới 9 bạn học sinh đặc biệt với những hoàn cảnh và thử thách rất riêng (từ nghịch ngợm cá biệt cho đến những bạn mang khiếm khuyết, cần hỗ trợ hòa nhập, chậm phát triển...). Đã có những mệt mỏi, trăn trở, nhưng cô vẫn luôn bao dung, nhẫn nại và hết lòng vì công việc, không bao giờ bỏ cuộc và chưa từng buông tay bất kỳ học trò nào.`,
      highlight: '9 bạn học sinh đặc biệt là 9 thử thách lớn — và cô đã đón nhận bằng cả tấm lòng người mẹ.',
    },
    {
      id: 'chapter-3',
      number: '03',
      title: 'Sự Thấu Cảm Sau Hơn 1000 Ngày',
      subtitle: 'Tình thương không cần phô trương, chỉ cần lòng người cảm nhận',
      icon: Compass,
      content: `Trải qua những va vấp của tuổi học trò, giờ đây khi chuẩn bị chia xa mái trường Xuân Đỉnh, tập thể 12A15 K65 mới thực sự thấu suốt: sự nghiêm nghị của cô chính là chiếc khiên bảo vệ, và sự bao dung nhẫn nại của cô chính là chiếc nôi nuôi dưỡng chúng em trưởng thành. 1000 ngày bên cô không chỉ là những bài giảng Kinh tế & Pháp luật, mà là bài học sâu sắc nhất về lòng vị tha, sự tử tế và tinh thần trách nhiệm trước nghịch cảnh cuộc đời.`,
      highlight: 'Chúng em đã lớn khôn từ chính sự kiên định và tấm lòng bao dung không lời ấy.',
    },
  ],
  closing: {
    quoteLead: 'Bọn em cảm ơn cô vì tất cả.',
    defaultWish:
      'Chúc cô luôn dồi dào sức khỏe, an yên trong tâm hồn, luôn giữ trọn ngọn lửa nhiệt huyết với nghề và tìm thấy thật nhiều niềm vui, tự hào trên con đường gieo mầm tri thức...',
    signOff: 'Tập thể Lớp 12A15 (Niên khóa K65)',
    schoolName: 'Trường THPT Xuân Đỉnh',
  },
};

const smoothEasing = [0.16, 1, 0.3, 1] as const;

export default function TributeLandingPage() {
  const [customWish, setCustomWish] = useState(TRIBUTE_DATA.closing.defaultWish);
  const [isCopied, setIsCopied] = useState(false);
  const [isEditingWish, setIsEditingWish] = useState(false);

  const handleCopy = () => {
    const fullText = `${TRIBUTE_DATA.closing.quoteLead}\n\n${customWish}\n\n— ${TRIBUTE_DATA.closing.signOff}, ${TRIBUTE_DATA.closing.schoolName}`;
    navigator.clipboard.writeText(fullText);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  const scrollToStory = () => {
    document.getElementById('scrollytelling')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-[#0a0708] text-[#f5f5f4] selection:bg-amber-500/30 selection:text-amber-200 overflow-x-clip">
      
      {/* Thanh điều hướng cố định */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/40 border-b border-amber-900/20 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-600 to-amber-400 flex items-center justify-center text-black font-bold text-xs shadow-md shadow-amber-500/20">
            A15
          </div>
          <span className="text-sm font-medium tracking-wide text-amber-100/90 hidden sm:inline">
            THPT Xuân Đỉnh • K65 (2022 - 2025)
          </span>
        </div>
        <div className="text-xs tracking-widest uppercase text-amber-400/90 font-serif border border-amber-500/30 px-3 py-1 rounded-full bg-amber-950/40">
          Tri Ân Cô Kim Lưu
        </div>
      </nav>

      {/* =========================================================================
         PHASE 2: HERO SECTION (MỞ ĐẦU TRANG NGHIÊM)
         ========================================================================= */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-16 overflow-hidden">
        {/* Background Image với Lớp Phủ Dark Overlay Mờ Ảo */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-1000 ease-out"
            style={{ 
              backgroundImage: `url(${IMAGE_1_HERO})`,
              filter: 'brightness(0.28) contrast(1.15) saturate(0.95)' 
            }}
          />
          {/* Lớp phủ gradient sâu thẳm */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#16060c]/85 via-[#0c0608]/85 to-[#0a0708]" />
          
          {/* Vầng sáng vàng ấm lan tỏa nhẹ */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0a0708] to-transparent pointer-events-none" />
        </div>

        {/* Nội dung Hero */}
        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
          
          {/* Badge Huy hiệu */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: smoothEasing }}
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-amber-950/70 border border-amber-500/40 text-amber-300 text-xs sm:text-sm font-medium tracking-wider uppercase mb-8 shadow-inner shadow-amber-500/15"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <span>{TRIBUTE_DATA.hero.badge}</span>
          </motion.div>

          {/* Tiêu đề chính */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: smoothEasing }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-normal tracking-tight text-white leading-[1.18] mb-6"
          >
            Hơn <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 font-semibold">1000 Ngày</span> Trọn Vẹn
            <br />
            Cùng Cô Lương Thị Kim Lưu
          </motion.h1>

          {/* Dải phân cách hoa văn thanh lịch */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: smoothEasing }}
            className="flex items-center justify-center space-x-3 w-48 my-4"
          >
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-amber-500/50 to-amber-400" />
            <Award className="w-4 h-4 text-amber-400 flex-shrink-0" />
            <div className="h-[1px] w-full bg-gradient-to-l from-transparent via-amber-500/50 to-amber-400" />
          </motion.div>

          {/* Thông điệp & Thông tin môn học */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.6, ease: smoothEasing }}
            className="text-base sm:text-lg md:text-xl text-stone-300/90 font-light max-w-2xl leading-relaxed mt-2"
          >
            Kính dâng người cô chủ nhiệm bộ môn{' '}
            <span className="text-amber-300 font-medium">{TRIBUTE_DATA.teacher.subject}</span>{' '}
            — Người đã nhẫn nại dẫn dắt chúng em qua từng ngày tháng thanh xuân nhiều thử thách nhất.
          </motion.p>

          {/* Nút lướt xuống mở câu chuyện */}
          <motion.button
            onClick={scrollToStory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9, ease: smoothEasing }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="mt-12 inline-flex items-center space-x-2.5 px-6 py-3 rounded-full bg-gradient-to-r from-amber-500/20 to-amber-600/10 hover:from-amber-500/30 hover:to-amber-600/20 border border-amber-400/40 text-amber-200 text-sm font-medium tracking-wide transition-all shadow-lg shadow-amber-950/40 cursor-pointer"
          >
            <span>Lật mở từng trang ký ức</span>
            <ChevronDown className="w-4 h-4 text-amber-300 animate-bounce" />
          </motion.button>
        </div>
      </section>

      {/* =========================================================================
         PHASE 3: CÂU CHUYỆN THẤU HIỂU (SCROLLYTELLING TIMELINE)
         ========================================================================= */}
      <section id="scrollytelling" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        
        {/* Tiêu đề phần */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center space-x-2 text-xs tracking-widest uppercase text-amber-400 font-medium mb-3"
          >
            <Clock className="w-3.5 h-3.5" />
            <span>Hành Trình Đồng Hành & Thấu Cảm</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-serif text-white tracking-tight"
          >
            Những Điều Chúng Em Khắc Ghi
          </motion.h2>
          <p className="mt-4 text-stone-400 text-sm sm:text-base max-w-xl mx-auto font-light">
            Có những tình thương được cất giấu sau sự nghiêm khắc, và có những sự hy sinh cần thời gian để thấu suốt.
          </p>
        </div>

        {/* Trục thời gian (Timeline Spine) */}
        <div className="relative">
          {/* Đường line dọc phát sáng nhẹ */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 -translate-x-1/2 w-[2px] bg-gradient-to-b from-amber-500/20 via-amber-500/50 to-amber-500/10 pointer-events-none" />

          {/* Danh sách 3 Thẻ Scrollytelling */}
          <div className="space-y-24 md:space-y-32">
            {TRIBUTE_DATA.stories.map((story, index) => {
              const isEven = index % 2 === 0;
              const IconComponent = story.icon;

              return (
                <div
                  key={story.id}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Điểm nút trên trục (Timeline Node) */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center w-12 h-12 rounded-full bg-[#140a0e] border-2 border-amber-400/80 shadow-lg shadow-amber-500/20">
                    <IconComponent className="w-5 h-5 text-amber-300" />
                  </div>

                  {/* Khoảng trống đối trọng cho layout desktop */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Khối Thẻ Nội Dung (Card) */}
                  <motion.div
                    initial={{ opacity: 0, y: 40, scale: 0.96 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.9, ease: smoothEasing }}
                    className={`w-full md:w-1/2 pl-16 md:pl-0 ${
                      isEven ? 'md:pr-12' : 'md:pl-12'
                    }`}
                  >
                    <div className="relative group p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-stone-900/90 to-[#140b0f]/90 border border-amber-500/20 hover:border-amber-400/40 transition-all duration-500 shadow-2xl shadow-black/80 backdrop-blur-md">
                      
                      {/* Số thứ tự nghệ thuật chìm mờ */}
                      <span className="absolute top-4 right-6 text-5xl font-serif font-black text-amber-500/10 select-none">
                        {story.number}
                      </span>

                      {/* Phụ đề & Tiêu đề */}
                      <span className="inline-block text-xs font-medium text-amber-400/90 uppercase tracking-wider mb-2">
                        {story.subtitle}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-serif text-white font-medium mb-4 leading-snug">
                        {story.title}
                      </h3>

                      {/* Nội dung câu chuyện */}
                      <p className="text-stone-300/90 text-sm sm:text-base leading-relaxed font-light mb-6">
                        {story.content}
                      </p>

                      {/* Trích dẫn nổi bật */}
                      <div className="border-l-2 border-amber-400/60 pl-4 py-1.5 bg-amber-500/[0.04] rounded-r-lg">
                        <p className="text-xs sm:text-sm text-amber-200/90 italic font-serif leading-relaxed">
                          "{story.highlight}"
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
         PHASE 4: LỜI TRI ÂN & BỨC ẢNH THỨ 2 (STICKY REVEAL SECTION)
         ========================================================================= */}
      <section className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-amber-900/20">
        
        {/* Ánh sáng vàng dịu */}
        <div className="absolute top-1/2 right-10 w-96 h-96 bg-amber-700/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* CỘT TRÁI: GHIM CỐ ĐỊNH (STICKY) BỨC ẢNH CHÂN DUNG CÔ */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, ease: smoothEasing }}
              className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none"
            >
              {/* Viền mạ vàng kép tinh tế */}
              <div className="absolute -inset-1.5 bg-gradient-to-br from-amber-400/40 via-amber-600/20 to-amber-900/40 rounded-3xl blur-sm" />
              
              <div className="relative rounded-2xl overflow-hidden bg-stone-900 border border-amber-400/40 shadow-2xl">
                
                {/* Ảnh Chân Dung (IMAGE_2_PORTRAIT) */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-stone-950">
                  <img
                    src={IMAGE_2_PORTRAIT}
                    alt={TRIBUTE_DATA.teacher.name}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Gradient nhẹ ở đáy ảnh */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />
                  
                  {/* Chú thích trên ảnh */}
                  <div className="absolute bottom-4 left-4 right-4 text-center">
                    <span className="text-xs uppercase tracking-widest text-amber-300/80 font-medium block mb-1">
                      Kính Yêu & Biết Ơn
                    </span>
                    <h4 className="text-lg sm:text-xl font-serif text-white font-medium">
                      {TRIBUTE_DATA.teacher.name}
                    </h4>
                    <p className="text-xs text-stone-300 font-light mt-0.5">
                      Nụ cười rạng rỡ của người lái đò A15K65
                    </p>
                  </div>
                </div>

                {/* Dải thông điệp bên dưới ảnh */}
                <div className="p-4 bg-gradient-to-r from-stone-900 via-[#180a0f] to-stone-900 border-t border-amber-500/20 text-center">
                  <span className="text-xs text-amber-200/80 font-serif italic">
                    "Tận tâm chở đạo, chở người qua sông..."
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* CỘT PHẢI: CUỘN LỜI TRI ÂN & LỜI CHÚC TÙY BIẾN */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Header Lời Tri Ân */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 text-xs font-medium tracking-widest uppercase text-amber-400 mb-2">
                <Quote className="w-3.5 h-3.5" />
                <span>Bức Thư Tri Ân Cuối Cấp</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif text-white font-normal leading-tight">
                Lời Tri Ân Từ Trái Tim Tập Thể 12A15
              </h2>
            </motion.div>

            {/* Nội dung tâm thư */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="prose prose-invert max-w-none text-stone-300 text-base sm:text-lg leading-relaxed font-light space-y-5"
            >
              <p>
                Kính gửi <strong className="text-amber-200 font-medium">Cô Lương Thị Kim Lưu</strong>,
              </p>
              <p>
                Những ngày cuối cùng của đời học sinh THPT đang dần khép lại. Ba năm dưới mái trường Xuân Đỉnh với hơn 1000 ngày gắn bó, chúng em có thể đã từng là những đứa trẻ bướng bỉnh, có lúc vô tâm chưa thấu hiểu hết những âu lo và áp lực nặng nề mà cô phải đối diện.
              </p>
              <p>
                Hai năm đầu tiên với 9 bạn học sinh đặc biệt — thử thách tưởng chừng có thể làm chùn bước bất kỳ người giáo viên nào. Nhưng chính cô, bằng lòng nhẫn nại bền bỉ và sự bao dung không phô trương, đã kiên trì uốn nắn và gìn giữ một tập thể A15 trọn vẹn, đoàn kết và ấm áp như ngày hôm nay.
              </p>
            </motion.div>

            {/* Khối Điểm Nhấn: Lời cảm ơn và Lời chúc */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-amber-950/30 via-stone-900/60 to-black/80 border border-amber-500/30 shadow-2xl relative overflow-hidden"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold flex items-center gap-1.5">
                  <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
                  Thông điệp kết
                </span>
                <button
                  onClick={() => setIsEditingWish(!isEditingWish)}
                  className="text-xs text-amber-300 hover:text-amber-200 underline underline-offset-4 cursor-pointer transition-colors"
                >
                  {isEditingWish ? 'Xong' : 'Chỉnh sửa lời chúc'}
                </button>
              </div>

              {/* Lời Cảm Ơn Cốt Lõi */}
              <h3 className="text-xl sm:text-2xl font-serif text-amber-200 font-semibold mb-3">
                "{TRIBUTE_DATA.closing.quoteLead}"
              </h3>

              {/* Phần Lời Chúc (Có thể đọc hoặc gõ điền thêm) */}
              <AnimatePresence mode="wait">
                {isEditingWish ? (
                  <motion.div
                    key="editing"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-3"
                  >
                    <textarea
                      value={customWish}
                      onChange={(e) => setCustomWish(e.target.value)}
                      rows={4}
                      className="w-full bg-black/60 border border-amber-500/40 rounded-xl p-3.5 text-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400/50 resize-none font-light leading-relaxed"
                      placeholder="Điền lời chúc của bạn gửi tới cô..."
                    />
                    <p className="text-[11px] text-stone-400 italic">
                      * Bạn có thể tự do chỉnh sửa và thêm lời chúc riêng của mình.
                    </p>
                  </motion.div>
                ) : (
                  <motion.p
                    key="display"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-stone-300 text-sm sm:text-base leading-relaxed font-light italic"
                  >
                    "{customWish}"
                  </motion.p>
                )}
              </AnimatePresence>

              {/* Chữ ký tập thể */}
              <div className="mt-8 pt-6 border-t border-amber-500/20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <div className="font-serif text-white font-medium text-base">
                    {TRIBUTE_DATA.closing.signOff}
                  </div>
                  <div className="text-xs text-amber-400/80 font-light">
                    {TRIBUTE_DATA.closing.schoolName}
                  </div>
                </div>

                {/* Nút Sao Chép Toàn Bộ Lời Tri Ân */}
                <button
                  onClick={handleCopy}
                  className="inline-flex items-center justify-center space-x-2 px-4 py-2 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-400/40 text-amber-200 text-xs font-medium transition-all cursor-pointer"
                >
                  {isCopied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Đã sao chép lời chúc!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Sao chép thông điệp</span>
                    </>
                  )}
                </button>
              </div>
            </motion.div>

            {/* Dấu ấn kết thúc trang trọng */}
            <div className="pt-4 text-center sm:text-left text-xs text-stone-500 font-light">
              Lưu giữ mãi những kỷ niệm đẹp nhất niên khóa 2022 - 2025 • THPT Xuân Đỉnh
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
         FOOTER TỐI GIẢN
         ========================================================================= */}
      <footer className="border-t border-stone-800/80 py-10 text-center text-xs text-stone-500">
        <div className="max-w-4xl mx-auto px-4 space-y-2">
          <p className="font-serif text-stone-400 text-sm">
            Trân trọng gửi tặng Cô Lương Thị Kim Lưu
          </p>
          <p className="font-light">
            Thiết kế & Biên soạn bởi Tập thể Lớp 12A15 (K65) — Trường THPT Xuân Đỉnh
          </p>
        </div>
      </footer>
    </main>
  );
}
