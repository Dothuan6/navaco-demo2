export type Language = 'vi' | 'en';

export type ServiceGroupId = 'operations' | 'upgrades' | 'infrastructure';

export interface BilingualText {
  vi: string;
  en: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  groupId: ServiceGroupId;
  groupLabel: BilingualText;
  number: string;
  title: BilingualText;
  shortDesc: BilingualText;
  customerProblems: {
    title: BilingualText;
    detail: BilingualText;
  }[];
  whatNavacoDoes: {
    title: BilingualText;
    detail: BilingualText;
  }[];
  processSteps: {
    step: string;
    title: BilingualText;
    desc: BilingualText;
  }[];
  relatedProjectIds: string[];
  partnerIds: string[];
  defaultNeedType: QuoteNeedType;
}

export interface ServiceGroup {
  id: ServiceGroupId;
  number: string;
  title: BilingualText;
  lifecycleStage: BilingualText;
  summary: BilingualText;
  serviceIds: string[];
}

export interface EquipmentItem {
  id: string;
  code: string;
  name: BilingualText;
  oneLiner: BilingualText;
  categoryLabel: BilingualText;
  capabilities: {
    maintenance: BilingualText;
    spareParts: BilingualText;
    upgrade: BilingualText;
    rental: BilingualText;
  };
  specs: {
    label: BilingualText;
    value: BilingualText;
  }[];
  relatedProjectIds: string[];
  partnerIds: string[];
}

export interface ProjectItem {
  id: string;
  title: BilingualText;
  client: BilingualText;
  country: 'VN' | 'KH';
  countryLabel: BilingualText;
  location: BilingualText;
  serviceGroup: ServiceGroupId;
  serviceTag: BilingualText;
  equipmentUsed: BilingualText;
  timeframe: string;
  summary: BilingualText;
  challenge: BilingualText;
  solution: BilingualText;
  outcomes: BilingualText[];
  beforeState: {
    label: BilingualText;
    metrics: BilingualText[];
    visualNote: BilingualText;
  };
  afterState: {
    label: BilingualText;
    metrics: BilingualText[];
    visualNote: BilingualText;
  };
  galleryCaptions: BilingualText[];
  featured: boolean;
}

export interface PartnerItem {
  id: string;
  name: string;
  country: BilingualText;
  category: BilingualText;
  whatNavacoProvides: BilingualText;
  components: BilingualText[];
}

export interface NewsItem {
  id: string;
  category: 'project' | 'technical' | 'event';
  categoryLabel: BilingualText;
  date: string;
  seriesBadge?: BilingualText;
  title: BilingualText;
  excerpt: BilingualText;
  content: BilingualText[];
  relatedProjectId?: string;
}

export interface JobOpening {
  id: string;
  title: BilingualText;
  location: BilingualText;
  type: BilingualText;
  summary: BilingualText;
  requirements: BilingualText[];
}

export type QuoteNeedType =
  | 'maintenance'
  | 'spare_parts'
  | 'rental'
  | 'manpower'
  | 'upgrade'
  | 'relocation'
  | 'electrical'
  | 'other';

export interface QuoteSubmission {
  id: string;
  fullName: string;
  company: string;
  role: string;
  email: string;
  phoneOrZalo: string;
  country: 'VN' | 'KH' | 'OTHER';
  need: QuoteNeedType;
  equipmentAndBrand: string;
  message: string;
  attachmentName?: string;
  createdAt: string;
}

export const SERVICE_GROUPS: ServiceGroup[] = [
  {
    id: 'operations',
    number: '01',
    title: {
      vi: 'Vận hành & Khai thác',
      en: 'Operations & Fleet Support',
    },
    lifecycleStage: {
      vi: 'Giai đoạn 1 · Duy trì độ sẵn sàng thiết bị 24/7',
      en: 'Stage 1 · Maintaining 24/7 Equipment Availability',
    },
    summary: {
      vi: 'Đảm bảo thiết bị cảng và nhà máy vận hành liên tục với dịch vụ bảo trì trọn gói (FCM), phụ tùng chính hãng, cho thuê thiết bị và nhân sự kỹ thuật thường trực.',
      en: 'Ensure uninterrupted port and plant operations through Full Maintenance Contracts (FCM), OEM spare parts, fleet rental, and certified operators.',
    },
    serviceIds: ['fcm', 'spare-parts', 'equipment-rental', 'manpower'],
  },
  {
    id: 'upgrades',
    number: '02',
    title: {
      vi: 'Nâng cấp & Hiện đại hóa',
      en: 'Modernization & Upgrades',
    },
    lifecycleStage: {
      vi: 'Giai đoạn 2 · Kéo dài tuổi thọ & Tối ưu hiệu suất',
      en: 'Stage 2 · Lifecycle Extension & Performance Retrofit',
    },
    summary: {
      vi: 'Khôi phục và nâng tầm năng lực thiết bị hiện hữu thông qua retrofit hệ điều khiển PLC/biến tần/E-House, đại tu cơ khí - động lực, di dời cẩu và đào tạo chuyên sâu.',
      en: 'Extend crane lifecycle and reliability through PLC/drive/E-House electrical retrofits, full structural overhauls, heavy crane relocation, and operator training.',
    },
    serviceIds: ['retrofit', 'overhaul', 'relocation', 'training'],
  },
  {
    id: 'infrastructure',
    number: '03',
    title: {
      vi: 'Hạ tầng & Năng lượng',
      en: 'Infrastructure & Shore Power',
    },
    lifecycleStage: {
      vi: 'Giai đoạn 3 · Nền tảng năng lượng bền vững',
      en: 'Stage 3 · Sustainable Port Power Infrastructure',
    },
    summary: {
      vi: 'Thiết kế, thi công hệ thống điện trung/hạ thế, trạm biến áp, busbar công nghiệp và giải pháp cấp điện bờ (Shore Power) giảm phát thải cho cảng xanh.',
      en: 'Engineering and installation of MV/LV substations, industrial busbar trunking, and Siemens-partnered Shore Power solutions for green ports.',
    },
    serviceIds: ['mv-lv-power', 'shore-power'],
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'fcm',
    slug: 'bao-tri-tron-goi-fcm',
    groupId: 'operations',
    groupLabel: { vi: 'Vận hành', en: 'Operations' },
    number: '01.1',
    title: {
      vi: 'Bảo trì trọn gói (FCM)',
      en: 'Full Maintenance Contract (FCM)',
    },
    shortDesc: {
      vi: 'Bảo trì định kỳ, sửa chữa 24/7, kỹ thuật viên thường trực tại cảng và quản lý bằng phần mềm bảo trì.',
      en: 'Preventive maintenance, rapid repairs, on-site engineering teams, and CMMS maintenance tracking.',
    },
    customerProblems: [
      {
        title: {
          vi: 'Thiết bị dừng đột xuất làm gián đoạn làm hàng',
          en: 'Unplanned equipment downtime halting vessel operations',
        },
        detail: {
          vi: 'Cẩu bờ hoặc xe nâng gặp sự cố bất ngờ trong lúc tàu cập bến gây thiệt hại tiến độ giải phóng tàu và chi phí neo đậu.',
          en: 'Unexpected crane or reach stacker failures during vessel calls delay berth turnaround and increase demurrage costs.',
        },
      },
      {
        title: {
          vi: 'Thiếu hụt kỹ thuật viên chuyên sâu về cẩu cảng',
          en: 'Shortage of specialized port equipment technicians',
        },
        detail: {
          vi: 'Đội ngũ nội bộ khó bao quát đồng thời hệ thống cơ khí, thủy lực, PLC và biến tần của nhiều hãng thiết bị khác nhau.',
          en: 'In-house teams struggle to cover multi-brand mechanical, hydraulic, PLC, and drive troubleshooting simultaneously.',
        },
      },
    ],
    whatNavacoDoes: [
      {
        title: {
          vi: 'Đội ngũ kỹ thuật viên thường trực tại cảng',
          en: 'Dedicated on-site engineering crew at the terminal',
        },
        detail: {
          vi: 'Bố trí nhân sự kỹ thuật có chứng chỉ hãng trực ca tại hiện trường (mô hình FCM tại Cái Mép), xử lý sự cố tức thời.',
          en: 'Deploy OEM-certified technicians on shift directly at the port (proven in our Cái Mép FCM model) for immediate response.',
        },
      },
      {
        title: {
          vi: 'Bảo trì phòng ngừa & Theo dõi bằng phần mềm CMMS',
          en: 'Preventive maintenance & digital CMMS tracking',
        },
        detail: {
          vi: 'Lập lịch bảo dưỡng theo giờ máy, kiểm tra rung động, nhiệt ảnh tủ điện và quản lý lịch sử linh kiện trên phần mềm bảo trì.',
          en: 'Schedule maintenance by operating hours, conduct thermal/vibration diagnostics, and log full asset history in CMMS software.',
        },
      },
    ],
    processSteps: [
      {
        step: '01',
        title: { vi: 'Khảo sát & Đánh giá thiết bị', en: 'Fleet Audit & Baseline Assessment' },
        desc: {
          vi: 'Kiểm tra tình trạng kỹ thuật toàn bộ cẩu và thiết bị nâng hạ, lập danh mục rủi ro và vật tư dự phòng.',
          en: 'Inspect mechanical, electrical, and hydraulic condition across the fleet and define critical spare inventories.',
        },
      },
      {
        step: '02',
        title: { vi: 'Thiết lập đội ngũ & Phần mềm bảo trì', en: 'On-Site Team & CMMS Setup' },
        desc: {
          vi: 'Triển khai kỹ thuật viên tại cảng, tích hợp quy trình PM/CM và phần mềm theo dõi lịch sử bảo trì.',
          en: 'Station certified engineers on-site and configure digital preventive maintenance schedules.',
        },
      },
      {
        step: '03',
        title: { vi: 'Bảo trì định kỳ & Trực ứng cứu 24/7', en: 'Scheduled PM & 24/7 Rapid Response' },
        desc: {
          vi: 'Thực hiện bảo dưỡng theo giờ vận hành, khắc phục sự cố đột xuất đảm bảo cam kết độ sẵn sàng (Availability).',
          en: 'Execute hour-based maintenance and rapid breakdown intervention to meet strict availability SLAs.',
        },
      },
      {
        step: '04',
        title: { vi: 'Báo cáo kỹ thuật & Tối ưu định kỳ', en: 'Technical Reporting & Reliability Optimization' },
        desc: {
          vi: 'Phân tích nguyên nhân gốc rễ (RCA), báo cáo KPI hàng tháng và đề xuất cải tiến giảm tỷ lệ hỏng hóc.',
          en: 'Conduct root-cause analysis (RCA), deliver monthly reliability KPIs, and recommend engineering upgrades.',
        },
      },
    ],
    relatedProjectIds: ['cmit-cai-mep', 'rtg-sihanoukville'],
    partnerIds: ['kalmar', 'bromma', 'bubenzer', 'siemens'],
    defaultNeedType: 'maintenance',
  },
  {
    id: 'spare-parts',
    slug: 'phu-tung-chinh-hang',
    groupId: 'operations',
    groupLabel: { vi: 'Vận hành', en: 'Operations' },
    number: '01.2',
    title: {
      vi: 'Phụ tùng chính hãng',
      en: 'OEM Spare Parts & Components',
    },
    shortDesc: {
      vi: 'Tư vấn tra mã chuẩn xác, cung cấp phụ tùng chính hãng Bubenzer, Teufelberger, Bromma, Kalmar, Siemens và lắp đặt tận nơi.',
      en: 'Accurate part-number cross-referencing, genuine OEM supply from Bubenzer, Teufelberger, Bromma, Kalmar, Siemens, and turnkey installation.',
    },
    customerProblems: [
      {
        title: {
          vi: 'Thời gian chờ nhập phụ tùng kéo dài',
          en: 'Long lead times for critical imported spare parts',
        },
        detail: {
          vi: 'Đặt hàng qua nhiều khâu trung gian khiến thời gian giao hàng lâu, thiết bị phải nằm chờ vật tư.',
          en: 'Multi-layer procurement delays delivery of critical brake, cable, or spreader parts, leaving cranes idle.',
        },
      },
      {
        title: {
          vi: 'Khó xác định đúng mã phụ tùng thay thế',
          en: 'Difficulty identifying exact superseded OEM part numbers',
        },
        detail: {
          vi: 'Thiết bị đời cũ hoặc tài liệu kỹ thuật bị thất lạc dẫn đến rủi ro đặt sai mã phanh, cáp tải, xích dẫn cáp hoặc cảm biến.',
          en: 'Legacy equipment or missing manuals create costly risks of ordering incompatible brakes, wire ropes, or sensors.',
        },
      },
    ],
    whatNavacoDoes: [
      {
        title: {
          vi: 'Tư vấn kỹ thuật & Tra mã trực tiếp cùng hãng',
          en: 'Engineering verification & direct OEM part lookup',
        },
        detail: {
          vi: 'Kỹ thuật viên NAVACO khảo sát thực tế trên thiết bị, đối chiếu bản vẽ gốc để xác định chính xác mã phụ tùng tương thích 100%.',
          en: 'NAVACO engineers inspect the physical assembly and verify OEM schematics to guarantee 100% part compatibility.',
        },
      },
      {
        title: {
          vi: 'Cung cấp trọn gói kèm lắp đặt & Căn chỉnh',
          en: 'Turnkey supply with certified installation & calibration',
        },
        detail: {
          vi: 'Phân phối chính thức phanh Bubenzer, cáp Teufelberger, xích nhựa/cáp igus, ngàm Bromma, thang máy ALIMAK, thiết bị Sennebogen và hỗ trợ lắp đặt.',
          en: 'Supply genuine Bubenzer brakes, Teufelberger wire ropes, igus energy chains, Bromma spreaders, ALIMAK elevators, and Sennebogen parts with installation.',
        },
      },
    ],
    processSteps: [
      {
        step: '01',
        title: { vi: 'Tiếp nhận thông tin & Khảo sát mã', en: 'Part Identification & Technical Check' },
        desc: {
          vi: 'Kiểm tra nameplate thiết bị, bản vẽ điện/cơ khí hoặc khảo sát trực tiếp để xác nhận mã chuẩn.',
          en: 'Check equipment serial plates and schematics or inspect on-site to confirm exact OEM part numbers.',
        },
      },
      {
        step: '02',
        title: { vi: 'Báo giá & Cam kết tiến độ hãng', en: 'OEM Quotation & Lead-Time Commitment' },
        desc: {
          vi: 'Cung cấp báo giá cạnh tranh từ mạng lưới đối tác Port Ecosystem cùng chứng nhận CO/CQ đầy đủ.',
          en: 'Provide direct partner pricing with full Certificate of Origin (CO) and Certificate of Quality (CQ).',
        },
      },
      {
        step: '03',
        title: { vi: 'Giao hàng & Lắp đặt tại hiện trường', en: 'Delivery & On-Site Installation' },
        desc: {
          vi: 'Giao hàng tới cảng/nhà máy và cử đội kỹ thuật lắp đặt, thay cáp, căn chỉnh phanh hoặc nạp tham số.',
          en: 'Deliver to terminal and dispatch technicians for rope reeving, brake torque calibration, or drive parameterization.',
        },
      },
      {
        step: '04',
        title: { vi: 'Nghiệm thu & Bảo hành kỹ thuật', en: 'Commissioning & Warranty Support' },
        desc: {
          vi: 'Chạy thử có tải, bàn giao biên bản thông số kỹ thuật và đồng hành bảo hành theo tiêu chuẩn hãng.',
          en: 'Perform load testing, hand over calibration records, and back every component with OEM warranty support.',
        },
      },
    ],
    relatedProjectIds: ['cmit-cai-mep', 'kalmar-ppap'],
    partnerIds: ['bubenzer', 'teufelberger', 'igus', 'bromma', 'alimak', 'sennebogen'],
    defaultNeedType: 'spare_parts',
  },
  {
    id: 'equipment-rental',
    slug: 'cho-thue-thiet-bi',
    groupId: 'operations',
    groupLabel: { vi: 'Vận hành', en: 'Operations' },
    number: '01.3',
    title: {
      vi: 'Cho thuê thiết bị nâng hạ',
      en: 'Port Equipment Rental',
    },
    shortDesc: {
      vi: 'Cho thuê Reach Stacker, xe nâng container rỗng, xe đầu kéo cảng ngắn hạn và dài hạn, kèm bảo trì và tài xế nếu cần.',
      en: 'Short- and long-term rental of Reach Stackers, Empty Container Handlers, and Terminal Tractors with full maintenance and optional operators.',
    },
    customerProblems: [
      {
        title: {
          vi: 'Thiếu hụt thiết bị vào mùa cao điểm làm hàng',
          en: 'Fleet shortage during peak container volume seasons',
        },
        detail: {
          vi: 'Sản lượng thông qua cảng tăng đột biến hoặc thiết bị hiện hữu đang dừng đại tu khiến bãi container bị ùn ứ.',
          en: 'Sudden cargo surges or scheduled crane overhauls create yard bottlenecks without immediate backup equipment.',
        },
      },
      {
        title: {
          vi: 'Áp lực vốn đầu tư CAPEX khi mua mới thiết bị',
          en: 'High CAPEX burden of purchasing new mobile equipment',
        },
        detail: {
          vi: 'Đầu tư thiết bị mới cần ngân sách lớn và thời gian chờ giao hàng nhiều tháng, không đáp ứng kịp hợp đồng khai thác ngắn/trung hạn.',
          en: 'Buying new machinery requires heavy upfront capital and long delivery lead times unsuitable for flexible project contracts.',
        },
      },
    ],
    whatNavacoDoes: [
      {
        title: {
          vi: 'Cung cấp Reach Stacker, Xe nâng rỗng & Xe đầu kéo sẵn sàng',
          en: 'Ready-to-deploy Reach Stackers, Empty Handlers & Tractors',
        },
        detail: {
          vi: 'Đội xe được kiểm định nghiêm ngặt tại xưởng Cái Mép trước khi bàn giao tới cảng (đã triển khai tại CMIT, cảng Tiên Sa, Đà Nẵng).',
          en: 'Equipment thoroughly inspected at our Cái Mép workshop before deployment (proven at CMIT and Tiên Sa Port, Đà Nẵng).',
        },
      },
      {
        title: {
          vi: 'Gói thuê linh hoạt kèm Bảo trì & Tài xế vận hành',
          en: 'Wet or dry lease packages with full maintenance included',
        },
        detail: {
          vi: 'Khách hàng chủ động chọn gói thuê khô (chỉ thiết bị + bảo trì định kỳ) hoặc thuê ướt (trọn gói thiết bị + bảo trì + tài xế có chứng chỉ).',
          en: 'Choose dry lease (equipment + preventive maintenance) or wet lease (complete with certified operators and on-site support).',
        },
      },
    ],
    processSteps: [
      {
        step: '01',
        title: { vi: 'Xác định nhu cầu tải trọng & Thời hạn', en: 'Capacity & Lease Term Assessment' },
        desc: {
          vi: 'Tư vấn cấu hình thiết bị phù hợp mặt bằng bãi, tải trọng nâng và tần suất khai thác.',
          en: 'Match equipment lifting capacity and stacking height to your yard layout and throughput demands.',
        },
      },
      {
        step: '02',
        title: { vi: 'Kiểm định kỹ thuật tại Xưởng Cái Mép', en: 'Pre-Delivery Inspection at Cái Mép Workshop' },
        desc: {
          vi: 'Bảo dưỡng toàn diện động cơ, hộp số, thủy lực, lốp và kiểm định an toàn trước khi xuất bãi.',
          en: 'Complete engine, transmission, hydraulic, and safety certification checks prior to dispatch.',
        },
      },
      {
        step: '03',
        title: { vi: 'Vận chuyển & Bàn giao tại cảng', en: 'Mobilization & On-Site Handover' },
        desc: {
          vi: 'Vận chuyển thiết bị tới hiện trường, chạy thử nghiệm thu và hướng dẫn vận hành an toàn.',
          en: 'Transport equipment to the terminal, perform acceptance testing, and brief yard supervisors.',
        },
      },
      {
        step: '04',
        title: { vi: 'Bảo dưỡng định kỳ suốt thời gian thuê', en: 'Continuous Maintenance Throughout Lease' },
        desc: {
          vi: 'Đội kỹ thuật NAVACO chịu trách nhiệm bảo trì định kỳ và xử lý sự cố nhanh chóng trong suốt hợp đồng.',
          en: 'NAVACO technicians handle all scheduled servicing and rapid troubleshooting throughout the rental period.',
        },
      },
    ],
    relatedProjectIds: ['tien-sa-rental', 'cmit-cai-mep'],
    partnerIds: ['kalmar', 'bromma'],
    defaultNeedType: 'rental',
  },
  {
    id: 'manpower',
    slug: 'cung-ung-nhan-luc-van-hanh',
    groupId: 'operations',
    groupLabel: { vi: 'Vận hành', en: 'Operations' },
    number: '01.4',
    title: {
      vi: 'Cung ứng nhân lực vận hành',
      en: 'Certified Operator & Technical Manpower Supply',
    },
    shortDesc: {
      vi: 'Cung ứng tài xế thiết bị nâng, người vận hành cẩu STS/RTG và kỹ thuật viên bảo trì được đào tạo bài bản, đầy đủ chứng chỉ.',
      en: 'Supply trained, safety-certified STS/RTG crane operators, reach stacker drivers, and maintenance technicians.',
    },
    customerProblems: [
      {
        title: {
          vi: 'Thiếu tài xế và người vận hành cẩu có tay nghề',
          en: 'Shortage of skilled crane and yard equipment operators',
        },
        detail: {
          vi: 'Tuyển dụng và đào tạo mới người vận hành cẩu STS/RTG hoặc Reach Stacker mất nhiều thời gian, ảnh hưởng năng suất xếp dỡ.',
          en: 'Recruiting and training qualified STS/RTG or Reach Stacker operators takes months, impacting berth productivity.',
        },
      },
      {
        title: {
          vi: 'Rủi ro mất an toàn do vận hành sai quy cách',
          en: 'Safety and equipment damage risks from improper operation',
        },
        detail: {
          vi: 'Nhân sự thiếu kinh nghiệm dễ thao tác giật cục, gây hư hại cáp tải, ngàm cẩu và tiềm ẩn mất an toàn lao động tại cảng.',
          en: 'Inexperienced operators cause shock loads, premature rope/spreader wear, and terminal safety hazards.',
        },
      },
    ],
    whatNavacoDoes: [
      {
        title: {
          vi: 'Cung ứng nhân sự vận hành & kỹ thuật có chứng chỉ',
          en: 'Deploy certified, port-ready operators and technicians',
        },
        detail: {
          vi: 'Đội ngũ tài xế và thợ vận hành được đào tạo quy trình an toàn cảng biển, nắm vững thao tác chuẩn giúp bảo vệ thiết bị.',
          en: 'Operators are trained in port safety protocols and smooth handling techniques that maximize productivity and protect machinery.',
        },
      },
      {
        title: {
          vi: 'Quản lý ca kíp linh hoạt theo sản lượng tàu',
          en: 'Flexible shift deployment aligned with vessel schedules',
        },
        detail: {
          vi: 'Đáp ứng nhân sự theo hợp đồng dài hạn hoặc tăng cường theo giai đoạn cao điểm tại Việt Nam và Cambodia.',
          en: 'Scale manpower on long-term contracts or peak-season rosters across terminals in Vietnam and Cambodia.',
        },
      },
    ],
    processSteps: [
      {
        step: '01',
        title: { vi: 'Khảo sát yêu cầu vị trí & Thiết bị', en: 'Role & Equipment Requirement Profiling' },
        desc: {
          vi: 'Xác định số lượng nhân sự, dòng thiết bị phụ trách (STS, RTG, Reach Stacker, Đầu kéo) và tiêu chuẩn HSE của cảng.',
          en: 'Define headcount, equipment types (STS, RTG, Reach Stacker, Tractor), and terminal HSE compliance rules.',
        },
      },
      {
        step: '02',
        title: { vi: 'Sát hạch tay nghề & Đào tạo hội nhập', en: 'Skill Assessment & Terminal Safety Induction' },
        desc: {
          vi: 'Kiểm tra thực hành vận hành, đào tạo quy trình an toàn nội bộ và trang bị đầy đủ đồ bảo hộ tiêu chuẩn NAVACO.',
          en: 'Conduct practical operating tests, site safety induction, and equip personnel with full NAVACO PPE.',
        },
      },
      {
        step: '03',
        title: { vi: 'Bố trí làm việc & Giám sát hiện trường', en: 'On-Site Deployment & Shift Supervision' },
        desc: {
          vi: 'Phân ca làm việc đồng bộ với điều độ cảng, có nhân sự dự phòng đảm bảo không gián đoạn ca trực.',
          en: 'Integrate seamlessly with terminal dispatch with backup personnel ready to cover every shift.',
        },
      },
      {
        step: '04',
        title: { vi: 'Đánh giá hiệu suất & Nâng cao kỹ năng', en: 'Performance Review & Continuous Upskilling' },
        desc: {
          vi: 'Đánh giá sản lượng moves/giờ, tuân thủ an toàn và tổ chức huấn luyện định kỳ nâng cao tay nghề.',
          en: 'Track moves-per-hour efficiency and safety compliance while providing ongoing technical refresher training.',
        },
      },
    ],
    relatedProjectIds: ['cmit-cai-mep', 'rtg-sihanoukville'],
    partnerIds: ['kalmar'],
    defaultNeedType: 'manpower',
  },
  {
    id: 'retrofit',
    slug: 'retrofit-dien-va-tu-dong-hoa',
    groupId: 'upgrades',
    groupLabel: { vi: 'Nâng cấp', en: 'Upgrades' },
    number: '02.1',
    title: {
      vi: 'Retrofit điện và tự động hóa',
      en: 'Electrical & Automation Retrofit',
    },
    shortDesc: {
      vi: 'Thay thế PLC, biến tần, SCADA, tủ điện và tích hợp phòng điện E-House chế tạo sẵn tại Việt Nam cho cẩu STS/RTG.',
      en: 'Upgrade legacy PLC, inverter drives, CMS/SCADA, switchgear, and pre-fabricated E-House modules built in Vietnam.',
    },
    customerProblems: [
      {
        title: {
          vi: 'Hệ điều khiển đời cũ ngừng sản xuất (Obsolete)',
          en: 'Obsolete PLC and drive systems with discontinued parts',
        },
        detail: {
          vi: 'Cẩu khai thác trên 10–15 năm sử dụng PLC và biến tần thế hệ cũ đã ngưng sản xuất, rất khó tìm linh kiện thay thế khi hỏng.',
          en: 'Cranes operating for 10–15+ years rely on discontinued PLCs and drives that are nearly impossible to source when failures occur.',
        },
      },
      {
        title: {
          vi: 'Hay phát sinh lỗi vặt, khó chẩn đoán nguyên nhân',
          en: 'Frequent intermittent faults and lack of diagnostic visibility',
        },
        detail: {
          vi: 'Hệ thống cáp tín hiệu lão hóa, thiếu màn hình giám sát lỗi chi tiết (CMS/SCADA) khiến thời gian tìm lỗi kéo dài.',
          en: 'Aging control wiring and lack of modern CMS/SCADA fault diagnostics prolong troubleshooting and reduce crane availability.',
        },
      },
    ],
    whatNavacoDoes: [
      {
        title: {
          vi: 'Thay mới PLC, Biến tần Siemens & Hệ thống SCADA/CMS',
          en: 'Modernize with Siemens PLCs, Sinamics Drives & SCADA/CMS',
        },
        detail: {
          vi: 'Thiết kế lại mạch điều khiển, lập trình PLC/biến tần thế hệ mới, tích hợp màn hình chẩn đoán lỗi trực quan theo thời gian thực.',
          en: 'Redesign control schematics, program modern Siemens PLCs and regenerative drives, and deploy real-time CMS diagnostics.',
        },
      },
      {
        title: {
          vi: 'Chế tạo & Lắp đặt sẵn Phòng điện E-House tại Việt Nam',
          en: 'Pre-fabricate & pre-test complete E-House modules in Vietnam',
        },
        detail: {
          vi: 'Chế tạo, lắp tủ điện và chạy thử (FAT) nguyên cụm E-House tại xưởng Việt Nam trước khi cẩu lắp lên thiết bị, rút ngắn tối đa thời gian dừng cẩu tại cảng.',
          en: 'Build, wire, and factory-test complete E-House electrical rooms in Vietnam prior to site lifting, minimizing crane downtime at the berth.',
        },
      },
    ],
    processSteps: [
      {
        step: '01',
        title: { vi: 'Khảo sát hệ thống hiện hữu & Thiết kế kỹ thuật', en: 'System Audit & Electrical Engineering Design' },
        desc: {
          vi: 'Đo đạc thông số động cơ, giải mã logic điều khiển cũ và thiết kế bản vẽ điện - tự động hóa mới.',
          en: 'Audit motor parameters, reverse-engineer legacy control logic, and produce updated electrical schematics.',
        },
      },
      {
        step: '02',
        title: { vi: 'Gia công Tủ điện / E-House & Lập trình PLC/SCADA', en: 'E-House Fabrication & PLC/SCADA Programming' },
        desc: {
          vi: 'Lắp đặt tủ điện, biến tần tại xưởng Cái Mép, lập trình phần mềm điều khiển và nghiệm thu tại xưởng (FAT).',
          en: 'Assemble panels and E-House at our Cái Mép facility, program PLC/SCADA software, and complete Factory Acceptance Testing (FAT).',
        },
      },
      {
        step: '03',
        title: { vi: 'Thi công thay thế & Đấu nối tại hiện trường', en: 'On-Site Installation & Cable Integration' },
        desc: {
          vi: 'Tháo dỡ tủ cũ, cẩu lắp E-House/tủ mới, kéo cáp động lực - điều khiển và xích dẫn cáp igus.',
          en: 'Dismantle legacy panels, hoist the new E-House/cabinets, and install power/control cabling and igus energy chains.',
        },
      },
      {
        step: '04',
        title: { vi: 'Căn chỉnh thông số (Commissioning) & Bàn giao', en: 'Commissioning, Load Testing & Handover' },
        desc: {
          vi: 'Tối ưu đường đặc tính tốc độ nâng/di chuyển, thử tải an toàn, bàn giao bản vẽ hoàn công và đào tạo kỹ thuật viên cảng.',
          en: 'Tune hoist/trolley/gantry motion curves, execute load tests, deliver as-built drawings, and train port engineers.',
        },
      },
    ],
    relatedProjectIds: ['rtg-sihanoukville', 'cmit-cai-mep'],
    partnerIds: ['siemens', 'igus', 'bubenzer'],
    defaultNeedType: 'upgrade',
  },
  {
    id: 'overhaul',
    slug: 'dai-tu-va-phuc-hoi',
    groupId: 'upgrades',
    groupLabel: { vi: 'Nâng cấp', en: 'Upgrades' },
    number: '02.2',
    title: {
      vi: 'Đại tu và phục hồi thiết bị',
      en: 'Structural, Mechanical & Genset Overhaul',
    },
    shortDesc: {
      vi: 'Đại tu cơ khí, động cơ phát điện (genset), thay mới cabin điều khiển, xử lý ăn mòn kết cấu thép và sơn phủ toàn bộ.',
      en: 'Complete mechanical refurbishment, diesel genset overhaul, ergonomic cabin replacement, structural steel repair, and marine-grade repainting.',
    },
    customerProblems: [
      {
        title: {
          vi: 'Thiết bị xuống cấp nghiêm trọng sau nhiều năm khai thác biển',
          en: 'Severe corrosion and mechanical wear from harsh marine environments',
        },
        detail: {
          vi: 'Môi trường hơi muối biển làm rỉ sét kết cấu thép, cabin xuống cấp, hộp số và cụm bánh xe mòn vượt giới hạn cho phép.',
          en: 'Salt-laden coastal air corrodes structural steel and cabins while gearboxes, drums, and bogies exceed wear tolerances.',
        },
      },
      {
        title: {
          vi: 'Tổ máy phát điện (Genset) tiêu hao nhiên liệu và hay quá nhiệt',
          en: 'Aging diesel gensets suffering high fuel burn and frequent trips',
        },
        detail: {
          vi: 'Động cơ diesel và đầu phát trên cẩu RTG giảm công suất, phát thải khói đen và dừng máy khi tải nặng.',
          en: 'RTG diesel engines and alternators lose power output, emit excessive smoke, and trip under heavy hoist loads.',
        },
      },
    ],
    whatNavacoDoes: [
      {
        title: {
          vi: 'Đại tu toàn diện Cơ khí, Thủy lực, Genset & Cabin',
          en: 'End-to-end Mechanical, Genset & Operator Cabin Refurbishment',
        },
        detail: {
          vi: 'Phục hồi cụm tời nâng, hộp giảm tốc, phanh Bubenzer, đại tu động cơ phát điện và lắp đặt cabin điều khiển tầm nhìn rộng mới.',
          en: 'Rebuild hoist winches, gearboxes, and Bubenzer brakes, overhaul diesel gensets, and install modern ergonomic operator cabins.',
        },
      },
      {
        title: {
          vi: 'Phun cát làm sạch & Sơn phủ chống ăn mòn tiêu chuẩn biển',
          en: 'Grit blasting, NDT structural repair & marine coating system',
        },
        detail: {
          vi: 'Kiểm tra khuyết tật mối hàn (NDT), gia cố kết cấu chịu lực và sơn 3 lớp chống ăn mòn chuyên dụng cho thiết bị cảng biển.',
          en: 'Perform NDT weld inspections, reinforce fatigued steel members, and apply multi-coat marine anti-corrosion paint systems.',
        },
      },
    ],
    processSteps: [
      {
        step: '01',
        title: { vi: 'Kiểm tra tổng thể & Đánh giá kết cấu (NDT)', en: 'Comprehensive Inspection & NDT Structural Survey' },
        desc: {
          vi: 'Đo độ dày tôn kết cấu, kiểm tra mối hàn chịu lực, đánh giá độ mòn cơ khí và tình trạng tổ máy phát.',
          en: 'Measure ultrasonic steel thickness, inspect critical welds, and evaluate mechanical and genset wear.',
        },
      },
      {
        step: '02',
        title: { vi: 'Tháo rã, Gia công phục hồi & Đại tu cụm máy', en: 'Disassembly, Machining & Sub-Assembly Overhaul' },
        desc: {
          vi: 'Đại tu genset, thay vòng bi/phớt hộp số, thay cáp Teufelberger và lắp đặt cụm cabin điều khiển mới.',
          en: 'Overhaul gensets, rebuild gearboxes and bogies, re-reeve Teufelberger wire ropes, and mount the new cabin.',
        },
      },
      {
        step: '03',
        title: { vi: 'Xử lý bề mặt & Sơn lại toàn bộ thiết bị', en: 'Surface Preparation & Full Marine Repainting' },
        desc: {
          vi: 'Làm sạch bề mặt đạt chuẩn SA 2.5, sơn chống rỉ epoxy giàu kẽm và sơn phủ polyurethane bền màu.',
          en: 'Prepare surfaces to SA 2.5 standard and apply zinc-rich epoxy primer and UV-resistant polyurethane topcoats.',
        },
      },
      {
        step: '04',
        title: { vi: 'Thử tải kiểm định & Bàn giao khai thác', en: 'Load Testing, Certification & Return to Service' },
        desc: {
          vi: 'Chạy thử tải tĩnh/động với cơ quan đăng kiểm, bàn giao thiết bị đạt hiệu suất tương đương cẩu mới.',
          en: 'Execute static and dynamic load tests with third-party inspectors and return the crane to full service.',
        },
      },
    ],
    relatedProjectIds: ['rtg-sihanoukville'],
    partnerIds: ['bubenzer', 'teufelberger', 'bromma'],
    defaultNeedType: 'upgrade',
  },
  {
    id: 'relocation',
    slug: 'nang-ha-lap-dat-di-doi-cau',
    groupId: 'upgrades',
    groupLabel: { vi: 'Nâng cấp', en: 'Upgrades' },
    number: '02.3',
    title: {
      vi: 'Nâng hạ, lắp đặt và di dời cẩu',
      en: 'Heavy Crane Erection, Installation & Relocation',
    },
    shortDesc: {
      vi: 'Tiếp nhận thiết bị mới, lắp ráp, tháo dỡ, vận chuyển siêu trường siêu trọng đường thủy/bộ và lắp dựng lại tại bến mới.',
      en: 'Turnkey reception of new port equipment, heavy assembly, dismantling, barge/land transport, and re-erection at new berths.',
    },
    customerProblems: [
      {
        title: {
          vi: 'Cần lắp dựng thiết bị mới nhập khẩu hoặc chuyển cẩu sang bến khác',
          en: 'Need to erect newly delivered equipment or relocate cranes between terminals',
        },
        detail: {
          vi: 'Khi cảng nhận lô thiết bị mới hoặc quy hoạch lại cầu bến, việc tháo dỡ và di dời cẩu nặng hàng trăm tấn đòi hỏi tính toán kỹ thuật cực kỳ khắt khe.',
          en: 'Receiving new machinery or reallocating multi-hundred-ton cranes across berths demands rigorous structural and rigging engineering.',
        },
      },
      {
        title: {
          vi: 'Yêu cầu an toàn tuyệt đối và không làm gián đoạn bến cảng',
          en: 'Strict marine safety and minimal berth disruption requirements',
        },
        detail: {
          vi: 'Thi công nâng hạ tại cầu cảng chịu tác động của thủy triều, gió lớn và giới hạn tải trọng mặt bến.',
          en: 'Heavy lifting on active quays requires precise tide window planning, wind load calculations, and quay deck load distribution.',
        },
      },
    ],
    whatNavacoDoes: [
      {
        title: {
          vi: 'Lập biện pháp thi công (Method Statement) & Tính toán an toàn',
          en: 'Full engineering method statements, rigging plans & stability calculations',
        },
        detail: {
          vi: 'Thiết kế sơ đồ móc cáp, phân bổ tải trọng lên cầu cảng/sà lan, tính toán ổn định gió và phê duyệt cùng cảng vụ.',
          en: 'Engineer lifting plans, quay/barge load spreading, and stability calculations approved by port authorities.',
        },
      },
      {
        title: {
          vi: 'Thực hiện trọn gói Tiếp nhận, Tháo dỡ, Vận chuyển & Lắp lại',
          en: 'Turnkey unloading, dismantling, heavy transport & commissioning',
        },
        detail: {
          vi: 'Kinh nghiệm thực tế từ dự án tiếp nhận lắp đặt thiết bị Kalmar tại PPAP (Cambodia) và di dời cẩu tại cảng Tân Thuận (TP.HCM).',
          en: 'Field-proven execution including Kalmar fleet assembly at PPAP (Cambodia) and crane relocation at Tân Thuận Port (HCMC).',
        },
      },
    ],
    processSteps: [
      {
        step: '01',
        title: { vi: 'Khảo sát hiện trường & Lập biện pháp nâng hạ', en: 'Site Survey & Heavy Lift Engineering' },
        desc: {
          vi: 'Khảo sát mặt bến, đường di chuyển, lập bản vẽ biện pháp thi công và đánh giá rủi ro (JSA/RA).',
          en: 'Survey quay deck strength and transport routes, preparing detailed Method Statements and Risk Assessments.',
        },
      },
      {
        step: '02',
        title: { vi: 'Chuẩn bị thiết bị nâng & Gia cố an toàn', en: 'Rigging Mobilization & Structural Bracing' },
        desc: {
          vi: 'Huy động cẩu lắp, rơ-moóc thủy lực (SPMT)/sà lan, gia cố kết cấu cẩu trước khi tháo dỡ hoặc nâng hạ.',
          en: 'Mobilize heavy mobile cranes, SPMTs/barges, and install temporary structural bracing prior to lifting.',
        },
      },
      {
        step: '03',
        title: { vi: 'Nâng hạ, Vận chuyển & Lắp dựng tại vị trí mới', en: 'Heavy Lifting, Transport & Mechanical Assembly' },
        desc: {
          vi: 'Thực hiện nâng hạ theo đúng cửa sổ thủy triều, vận chuyển an toàn và lắp ráp hoàn chỉnh cơ - điện.',
          en: 'Execute heavy lifts within planned tidal windows, transport safely, and complete full mechanical/electrical assembly.',
        },
      },
      {
        step: '04',
        title: { vi: 'Căn chỉnh, Thử tải đăng kiểm & Bàn giao', en: 'Alignment, Load Certification & Handover' },
        desc: {
          vi: 'Căn chỉnh hình học đường ray/bánh xe, chạy thử tải 100%–125% SWL và bàn giao chứng nhận an toàn.',
          en: 'Perform rail/wheel alignment, execute 100%–125% SWL load testing, and hand over safety certifications.',
        },
      },
    ],
    relatedProjectIds: ['kalmar-ppap', 'tan-thuan-relocation'],
    partnerIds: ['kalmar', 'teufelberger'],
    defaultNeedType: 'relocation',
  },
  {
    id: 'training',
    slug: 'dao-tao-van-hanh-va-simulator',
    groupId: 'upgrades',
    groupLabel: { vi: 'Nâng cấp', en: 'Upgrades' },
    number: '02.4',
    title: {
      vi: 'Đào tạo vận hành & Kỹ thuật (Simulator)',
      en: 'Operator & Technical Training + Crane Simulator',
    },
    shortDesc: {
      vi: 'Đào tạo vận hành an toàn, hướng dẫn xử lý sự cố sau bàn giao cho đội ngũ cảng; phát triển đề án buồng lái mô phỏng (Simulator).',
      en: 'Hands-on operator and maintenance troubleshooting training after handover, backed by NAVACO’s Crane Simulator R&D program.',
    },
    customerProblems: [
      {
        title: {
          vi: 'Nhân sự lúng túng khi tiếp nhận hệ thống mới sau nâng cấp',
          en: 'Crews unfamiliar with new control systems after crane retrofits',
        },
        detail: {
          vi: 'Sau khi retrofit PLC/SCADA hoặc nhận thiết bị mới, người vận hành và kỹ thuật viên cần thời gian làm quen giao diện và quy trình xử lý lỗi.',
          en: 'Following PLC/SCADA retrofits or new equipment delivery, operators and technicians need structured training on new interfaces and fault diagnostics.',
        },
      },
      {
        title: {
          vi: 'Đào tạo trực tiếp trên cẩu thật tốn chi phí và dừng làm hàng',
          en: 'Training novices on live cranes consumes fuel and berth time',
        },
        detail: {
          vi: 'Dành cẩu thật để huấn luyện người mới làm giảm thời gian khai thác thương mại và tiêu tốn nhiên liệu.',
          en: 'Taking active cranes out of commercial service for beginner training reduces terminal capacity and increases fuel wear.',
        },
      },
    ],
    whatNavacoDoes: [
      {
        title: {
          vi: 'Huấn luyện vận hành & Xử lý sự cố trực tiếp tại cảng',
          en: 'On-site operational mastery & fault-finding workshops',
        },
        detail: {
          vi: 'Kỹ sư NAVACO trực tiếp đào tạo lý thuyết và thực hành trên thiết bị sau bàn giao (đã triển khai thành công cho đội ngũ cảng PAS tại Sihanoukville).',
          en: 'NAVACO engineers conduct classroom and cab-level training post-handover (proven with PAS personnel at Sihanoukville Autonomous Port).',
        },
      },
      {
        title: {
          vi: 'Đề án Buồng lái mô phỏng (Crane Simulator) đang phát triển',
          en: 'NAVACO Crane Simulator R&D initiative for risk-free training',
        },
        detail: {
          vi: 'Phát triển hệ thống cabin mô phỏng tích hợp tay trang điều khiển thật và kịch bản thời tiết/sự cố để rèn luyện kỹ năng an toàn.',
          en: 'Developing a realistic crane cabin simulator with authentic joysticks and fault scenarios for safe, measurable operator training.',
        },
      },
    ],
    processSteps: [
      {
        step: '01',
        title: { vi: 'Đánh giá trình độ đầu vào của học viên', en: 'Competency Baseline Assessment' },
        desc: {
          vi: 'Phân loại nhóm học viên vận hành và nhóm kỹ thuật viên điện/cơ khí để thiết kế giáo trình sát thực tế.',
          en: 'Segment operator and maintenance technician cohorts to tailor curriculum to your specific crane models.',
        },
      },
      {
        step: '02',
        title: { vi: 'Đào tạo lý thuyết hệ thống & Quy tắc an toàn', en: 'System Architecture & Safety Theory' },
        desc: {
          vi: 'Hướng dẫn đọc bản vẽ điện/thủy lực, giải thích mã lỗi trên màn hình CMS/SCADA và quy trình khóa an toàn LOTO.',
          en: 'Teach schematic reading, CMS/SCADA alarm interpretation, and Lockout/Tagout (LOTO) safety procedures.',
        },
      },
      {
        step: '03',
        title: { vi: 'Thực hành trên mô hình / Thiết bị thực tế', en: 'Simulator & Live Equipment Coaching' },
        desc: {
          vi: 'Rèn luyện kỹ thuật chống lắc tải (anti-sway), đặt container chính xác và thao tác khắc phục sự cố nhanh.',
          en: 'Practice load sway control, smooth spreader landing, and step-by-step emergency fault recovery.',
        },
      },
      {
        step: '04',
        title: { vi: 'Kiểm tra sát hạch & Cấp chứng nhận hoàn thành', en: 'Final Evaluation & Competency Handover' },
        desc: {
          vi: 'Đánh giá lý thuyết + thực hành từng học viên và bàn giao bộ tài liệu hướng dẫn vận hành song ngữ.',
          en: 'Score theoretical and practical tests for each trainee and provide bilingual quick-reference troubleshooting guides.',
        },
      },
    ],
    relatedProjectIds: ['rtg-sihanoukville', 'kalmar-ppap'],
    partnerIds: ['siemens', 'kalmar'],
    defaultNeedType: 'upgrade',
  },
  {
    id: 'mv-lv-power',
    slug: 'dien-trung-ha-the-cho-cang-va-nha-may',
    groupId: 'infrastructure',
    groupLabel: { vi: 'Hạ tầng & Năng lượng', en: 'Infrastructure & Energy' },
    number: '03.1',
    title: {
      vi: 'Điện trung/hạ thế cho cảng và nhà máy',
      en: 'MV/LV Power Systems for Ports & Industrial Plants',
    },
    shortDesc: {
      vi: 'Thi công trạm biến áp, tủ trung thế, tủ hạ thế, hệ thống thanh cái dẫn điện (busbar) tiêu chuẩn quốc tế cho cảng biển và nhà máy.',
      en: 'Turnkey engineering and installation of substations, MV/LV switchgear, and high-capacity busbar trunking for ports and factories.',
    },
    customerProblems: [
      {
        title: {
          vi: 'Hệ thống cấp nguồn quá tải khi mở rộng công suất',
          en: 'Power distribution bottlenecks during port or factory expansion',
        },
        detail: {
          vi: 'Khi chuyển đổi sang cẩu điện (E-RTG/STS) hoặc lắp thêm dây chuyền sản xuất, hạ tầng điện cũ không đáp ứng được dòng khởi động và độ ổn định áp.',
          en: 'Electrifying RTG cranes or adding heavy factory lines overwhelms legacy transformers and distribution panels.',
        },
      },
      {
        title: {
          vi: 'Yêu cầu khắt khe về tiêu chuẩn an toàn và chất lượng điện năng',
          en: 'Stringent industrial standards for selectivity, harmonics, and uptime',
        },
        detail: {
          vi: 'Cảng biển và nhà máy FDI đòi hỏi hệ thống tủ trung/hạ thế và busbar thi công chuẩn xác, chống ẩm mặn và dễ bảo trì.',
          en: 'Port terminals and international manufacturing plants require IEC-compliant switchgear and busbar installation resistant to heat and humidity.',
        },
      },
    ],
    whatNavacoDoes: [
      {
        title: {
          vi: 'Thi công Trạm biến áp, Tủ Trung thế (MV) & Hạ thế (LV)',
          en: 'Substation, MV Switchgear & LV Main Distribution Installation',
        },
        detail: {
          vi: 'Cung cấp, lắp đặt trọn gói máy biến áp, tủ RMU/MV, tủ MSB/MDB, tủ tụ bù và lọc sóng hài sử dụng thiết bị chính hãng Siemens.',
          en: 'Supply and install transformers, MV RMU switchgear, LV main switchboards, and harmonic filter banks using genuine Siemens components.',
        },
      },
      {
        title: {
          vi: 'Lắp đặt Hệ thống Busbar công suất lớn & Cáp động lực',
          en: 'High-amperage Busbar Trunking & Industrial Power Cabling',
        },
        detail: {
          vi: 'Kinh nghiệm triển khai thực tế tại dự án nhà máy STOLL (Phnom Penh, Cambodia) với độ chính xác cơ khí và an toàn điện cao nhất.',
          en: 'Field-proven execution highlighted by our turnkey MV/LV and busbar installation for the STOLL manufacturing plant in Phnom Penh, Cambodia.',
        },
      },
    ],
    processSteps: [
      {
        step: '01',
        title: { vi: 'Khảo sát phụ tải & Thiết kế sơ đồ đơn tuyến', en: 'Load Study & Single-Line Diagram Engineering' },
        desc: {
          vi: 'Tính toán công suất, ngắn mạch, sụt áp và thiết kế giải pháp cấp nguồn tối ưu cho cảng hoặc nhà máy.',
          en: 'Calculate load demand, short-circuit ratings, and voltage drop to engineer resilient single-line distribution architectures.',
        },
      },
      {
        step: '02',
        title: { vi: 'Cung cấp thiết bị Tủ bảng điện & Busbar chính hãng', en: 'Procurement of Certified Switchgear & Busbars' },
        desc: {
          vi: 'Tích hợp thiết bị đóng cắt, bảo vệ rơ-le kỹ thuật số và thanh cái dẫn điện đạt chuẩn IEC.',
          en: 'Supply IEC-type-tested switchgear, digital protection relays, and high-efficiency busbar trunking systems.',
        },
      },
      {
        step: '03',
        title: { vi: 'Lắp đặt cơ điện & Đấu nối tại công trường', en: 'Site Installation, Busbar Rigging & Termination' },
        desc: {
          vi: 'Lắp đặt máy biến áp, căn chỉnh hệ giá đỡ busbar, kéo cáp trung/hạ thế và làm đầu cáp chuẩn kỹ thuật.',
          en: 'Position transformers, align overhead busbar runs, pull MV/LV cables, and perform certified terminations.',
        },
      },
      {
        step: '04',
        title: { vi: 'Thí nghiệm điện (Testing), Đóng điện & Bàn giao', en: 'Hi-Pot/Relay Testing, Energization & Handover' },
        desc: {
          vi: 'Đo cách điện, thí nghiệm rơ-le bảo vệ, phối hợp đóng điện nghiệm thu và bàn giao hồ sơ hoàn công.',
          en: 'Execute insulation resistance, hi-pot, and relay injection tests prior to safe energization and documentation handover.',
        },
      },
    ],
    relatedProjectIds: ['stoll-phnom-penh', 'cmit-cai-mep'],
    partnerIds: ['siemens', 'igus'],
    defaultNeedType: 'electrical',
  },
  {
    id: 'shore-power',
    slug: 'giai-phap-dien-bo-shore-power',
    groupId: 'infrastructure',
    groupLabel: { vi: 'Hạ tầng & Năng lượng', en: 'Infrastructure & Energy' },
    number: '03.2',
    title: {
      vi: 'Giải pháp Điện bờ (Shore Power)',
      en: 'Shore-to-Ship Power Solutions (Green Port)',
    },
    shortDesc: {
      vi: 'Giải pháp cấp điện bờ đồng bộ cùng Siemens và igus giúp tàu tắt máy phát diesel khi cập cảng, giảm khí thải và tiếng ồn.',
      en: 'Integrated shore-to-ship power systems partnered with Siemens and igus, enabling vessels to shut down auxiliary diesel engines at berth.',
    },
    customerProblems: [
      {
        title: {
          vi: 'Áp lực giảm phát thải CO2 và tiêu chuẩn Cảng Xanh (Green Port)',
          en: 'Decarbonization mandates and Green Port certification requirements',
        },
        detail: {
          vi: 'Tàu biển chạy máy phát phụ diesel trong suốt thời gian neo đậu làm hàng phát sinh lượng lớn khí thải CO2, SOx, NOx và tiếng ồn tại cảng.',
          en: 'Vessels running auxiliary diesel generators at berth emit substantial CO2, SOx, NOx, and noise across the terminal.',
        },
      },
      {
        title: {
          vi: 'Sự khác biệt tần số lưới điện (50Hz/60Hz) và quản lý cáp cầu cảng',
          en: 'Grid frequency conversion (50Hz/60Hz) and quay cable handling complexity',
        },
        detail: {
          vi: 'Đa số tàu biển quốc tế sử dụng điện 60Hz trong khi lưới điện Việt Nam/Cambodia là 50Hz, đồng thời cần hệ thống quản lý cáp linh hoạt dọc bến.',
          en: 'Most ocean-going vessels operate at 60Hz while local grids run at 50Hz, requiring reliable static frequency converters and flexible quay cable management.',
        },
      },
    ],
    whatNavacoDoes: [
      {
        title: {
          vi: 'Tư vấn Giải pháp Cấp điện bờ đồng bộ cùng Siemens',
          en: 'Joint Technical Consulting for Siemens SIHARBOR Shore Power',
        },
        detail: {
          vi: 'Giới thiệu và thiết kế giải pháp trạm biến đổi tần số tĩnh (50Hz sang 60Hz), tủ trung thế và hệ thống điều khiển an toàn chuẩn IEC/IEEE 80005.',
          en: 'Introduce and engineer IEC/IEEE 80005 compliant shore power architectures featuring Siemens static frequency converters and switchgear.',
        },
      },
      {
        title: {
          vi: 'Tích hợp Hệ thống Quản lý Cáp cầu cảng thông minh igus',
          en: 'Integrate igus Mobile Shore Power Outlet (iMSPO) Cable Systems',
        },
        detail: {
          vi: 'Kết hợp giải pháp ổ cắm và xích dẫn cáp di động dọc cầu cảng của igus cùng năng lực thi công lắp đặt, bảo trì tại chỗ của NAVACO.',
          en: 'Combine igus mobile quay cable management systems with NAVACO’s local engineering, installation, and lifecycle maintenance support.',
        },
      },
    ],
    processSteps: [
      {
        step: '01',
        title: { vi: 'Đánh giá đội tàu cập cảng & Hạ tầng lưới điện', en: 'Vessel Profile & Terminal Grid Feasibility Study' },
        desc: {
          vi: 'Phân tích công suất yêu cầu của các cỡ tàu cập bến, điện áp (6.6kV/11kV hoặc 400V) và khả năng cấp nguồn của trạm biến áp cảng.',
          en: 'Analyze berth vessel types, voltage/frequency demands (6.6kV/11kV or LV), and existing terminal substation capacity.',
        },
      },
      {
        step: '02',
        title: { vi: 'Thiết kế Kiến trúc Kỹ thuật cùng Siemens & igus', en: 'System Architecture Design with Siemens & igus' },
        desc: {
          vi: 'Đề xuất cấu hình trạm chuyển đổi tần số (E-House/Containerized) và phương án bố trí hố cắm cáp trên cầu bến.',
          en: 'Configure containerized frequency converter modules and quay trench cable handling layouts.',
        },
      },
      {
        step: '03',
        title: { vi: 'Lập phương án đầu tư theo lộ trình Cảng Xanh', en: 'Phased Green Port Implementation Roadmap' },
        desc: {
          vi: 'Xây dựng lộ trình triển khai phù hợp kế hoạch đầu tư của cảng, đảm bảo khả năng mở rộng cho nhiều cầu bến.',
          en: 'Develop a scalable engineering roadmap aligned with terminal CAPEX stages and environmental goals.',
        },
      },
      {
        step: '04',
        title: { vi: 'Thi công tích hợp & Đồng hành vận hành dài hạn', en: 'Turnkey Integration & Local Lifecycle Support' },
        desc: {
          vi: 'NAVACO đảm nhận thi công hạ tầng điện tại chỗ, kết nối hệ thống và bảo trì định kỳ ngay tại Việt Nam và Cambodia.',
          en: 'NAVACO executes local electrical integration, commissioning support, and long-term maintenance across Vietnam and Cambodia.',
        },
      },
    ],
    relatedProjectIds: ['stoll-phnom-penh', 'cmit-cai-mep'],
    partnerIds: ['siemens', 'igus'],
    defaultNeedType: 'electrical',
  },
];

export const EQUIPMENT_LIST: EquipmentItem[] = [
  {
    id: 'sts',
    code: 'STS',
    name: {
      vi: 'Cẩu bờ STS (Ship-to-Shore)',
      en: 'STS Crane (Ship-to-Shore)',
    },
    oneLiner: {
      vi: 'Bảo trì trọn gói, retrofit tủ điện PLC/biến tần/E-House và cung cấp cáp tải, phanh, ngàm cẩu chính hãng.',
      en: 'Full maintenance, PLC/drive/E-House retrofits, and genuine wire ropes, brakes, and spreaders for quay cranes.',
    },
    categoryLabel: {
      vi: 'Thiết bị tuyến tiền phương cầu cảng',
      en: 'Quayside Container Handling',
    },
    capabilities: {
      maintenance: {
        vi: 'Bảo trì trọn gói (FCM), trực ca kỹ thuật 24/7 khi tàu làm hàng, kiểm tra định kỳ cụm tời nâng, xe con, cần cẩu và thang máy ALIMAK.',
        en: '24/7 vessel-call standby, preventive maintenance of main hoist, trolley, boom hoist, and ALIMAK service elevators.',
      },
      spareParts: {
        vi: 'Cung cấp phanh đĩa/tang trống Bubenzer, cáp thép chịu lực Teufelberger, hệ thống festoon/xích cáp igus, ngàm chụp Bromma và biến tần Siemens.',
        en: 'Supply genuine Bubenzer brakes, Teufelberger hoist/boom wire ropes, igus festoon/energy chains, Bromma spreaders, and Siemens drives.',
      },
      upgrade: {
        vi: 'Retrofit hệ điều khiển PLC/SCADA, nâng cấp biến tần, chế tạo lắp đặt phòng điện E-House mới và di dời/nâng cao cẩu STS.',
        en: 'Full PLC/CMS/drive modernization, pre-fabricated E-House replacement, anti-sway upgrades, and crane relocation.',
      },
      rental: {
        vi: 'Cung ứng kỹ thuật viên bảo trì và thợ vận hành cẩu STS có chứng chỉ tay nghề cao.',
        en: 'Supply certified STS crane operators and specialized electrical/mechanical maintenance engineers.',
      },
    },
    specs: [
      { label: { vi: 'Hệ truyền động & Điều khiển', en: 'Drive & Control Systems' }, value: { vi: 'Siemens Sinamics / Simatic PLC / CMS', en: 'Siemens Sinamics / Simatic PLC / CMS' } },
      { label: { vi: 'Hệ thống phanh an toàn', en: 'Safety Braking Systems' }, value: { vi: 'Bubenzer Thruster & Hydraulic Disc Brakes', en: 'Bubenzer Thruster & Hydraulic Disc Brakes' } },
      { label: { vi: 'Cáp tải & Xích dẫn cáp', en: 'Wire Ropes & Cable Guidance' }, value: { vi: 'Teufelberger High-Performance / igus e-chain', en: 'Teufelberger High-Performance / igus e-chain' } },
    ],
    relatedProjectIds: ['cmit-cai-mep', 'tan-thuan-relocation'],
    partnerIds: ['siemens', 'bubenzer', 'teufelberger', 'bromma', 'igus', 'alimak'],
  },
  {
    id: 'rtg',
    code: 'RTG',
    name: {
      vi: 'Cẩu khung bánh lốp RTG',
      en: 'RTG Crane (Rubber-Tired Gantry)',
    },
    oneLiner: {
      vi: 'Đại tu tổng thể cơ khí - genset, retrofit điện tự động hóa, chuyển đổi E-RTG và đào tạo vận hành.',
      en: 'Complete structural/genset overhaul, PLC/drive retrofit, E-RTG electrification, and operator training.',
    },
    categoryLabel: {
      vi: 'Thiết bị xếp dỡ bãi container',
      en: 'Yard Container Stacking',
    },
    capabilities: {
      maintenance: {
        vi: 'Bảo dưỡng định kỳ động cơ diesel-genset, cụm bánh xe di chuyển, hệ thống chống lắc và tủ điện điều khiển.',
        en: 'Scheduled maintenance of diesel gensets, gantry bogies, anti-sway reeving, and electrical control panels.',
      },
      spareParts: {
        vi: 'Phụ tùng biến tần, PLC Siemens, cáp nâng hạ Teufelberger, phanh Bubenzer, ngàm Bromma và xích cáp igus cho chuyển đổi E-RTG.',
        en: 'Siemens drives/PLCs, Teufelberger ropes, Bubenzer brakes, Bromma spreaders, and igus cable reels/chains for E-RTG.',
      },
      upgrade: {
        vi: 'Đại tu phục hồi toàn bộ kết cấu & sơn mới, thay cabin điều khiển, retrofit tủ điện PLC/biến tần và chuyển đổi cấp nguồn điện lưới (E-RTG).',
        en: 'Full structural refurbishment and marine repainting, cabin replacement, PLC/drive retrofit, and busbar/reel E-RTG conversion.',
      },
      rental: {
        vi: 'Đào tạo người vận hành RTG và cung ứng nhân sự vận hành/bảo trì tại Việt Nam và Cambodia.',
        en: 'Hands-on RTG operator training and certified manpower deployment in Vietnam and Cambodia.',
      },
    },
    specs: [
      { label: { vi: 'Hạng mục nâng cấp tiêu biểu', en: 'Signature Retrofit Scope' }, value: { vi: 'Thay PLC, Biến tần, SCADA, Cabin & Đại tu Genset', en: 'PLC, Drives, SCADA, Cabin & Genset Overhaul' } },
      { label: { vi: 'Dự án kiểm chứng', en: 'Proven Track Record' }, value: { vi: 'Cảng Sihanoukville (PAS), CMIT Cái Mép, PPAP', en: 'Sihanoukville Port (PAS), CMIT Cái Mép, PPAP' } },
      { label: { vi: 'Giải pháp xanh', en: 'Electrification Option' }, value: { vi: 'Tích hợp hệ dẫn cáp igus & tủ điện Siemens E-RTG', en: 'igus e-chain & Siemens E-RTG Drive Integration' } },
    ],
    relatedProjectIds: ['rtg-sihanoukville', 'cmit-cai-mep', 'kalmar-ppap'],
    partnerIds: ['siemens', 'kalmar', 'bromma', 'bubenzer', 'igus', 'teufelberger'],
  },
  {
    id: 'reach-stacker',
    code: 'RS',
    name: {
      vi: 'Xe nâng chụp Reach Stacker',
      en: 'Reach Stacker',
    },
    oneLiner: {
      vi: 'Cho thuê ngắn/dài hạn, bảo trì động cơ - hộp số - thủy lực và cung cấp phụ tùng chính hãng Kalmar, Bromma.',
      en: 'Flexible fleet rental, drivetrain/hydraulic maintenance, and genuine Kalmar & Bromma spare parts.',
    },
    categoryLabel: {
      vi: 'Thiết bị nâng hạ cơ động',
      en: 'Mobile Container Handling',
    },
    capabilities: {
      maintenance: {
        vi: 'Bảo trì định kỳ 250h/500h/1000h/2000h cho động cơ, hộp số Dana/ZF, cầu chủ động Kessler và hệ thống thủy lực cần nâng.',
        en: '250h/500h/1000h/2000h interval servicing for engines, Dana/ZF transmissions, Kessler axles, and boom hydraulics.',
      },
      spareParts: {
        vi: 'Phụ tùng chính hãng Kalmar, ngàm chụp (spreader), twistlock, cảm biến tải trọng, bơm thủy lực, phớt xi-lanh và hộp điều khiển.',
        en: 'Genuine Kalmar parts, spreader twistlocks, load sensors, hydraulic pumps, cylinder seal kits, and ECUs.',
      },
      upgrade: {
        vi: 'Đại tu động cơ, hộp số, phục hồi xi-lanh thủy lực cần nâng, tân trang hệ thống điện và điều hòa cabin.',
        en: 'Complete engine and transmission rebuilds, boom cylinder reconditioning, and electrical harness refurbishment.',
      },
      rental: {
        vi: 'Cho thuê Reach Stacker 45 tấn phục vụ cảng biển, ICD và nhà máy công nghiệp, có tùy chọn kèm tài xế.',
        en: '45-ton Reach Stacker rental for ports, ICDs, and industrial yards, available with or without certified drivers.',
      },
    },
    specs: [
      { label: { vi: 'Tải trọng nâng tiêu chuẩn', en: 'Standard Lifting Capacity' }, value: { vi: '45 Tấn · Xếp cao 5 tầng container', en: '45 Tons · 5-High Container Stacking' } },
      { label: { vi: 'Hình thức dịch vụ', en: 'Service Modes' }, value: { vi: 'Cho thuê thiết bị · Bảo trì FCM · Phụ tùng Kalmar', en: 'Fleet Rental · FCM Maintenance · Kalmar Parts' } },
      { label: { vi: 'Căn cứ kỹ thuật', en: 'Workshop Support' }, value: { vi: 'Xưởng dịch vụ Cái Mép & Đội lưu động toàn quốc', en: 'Cái Mép Workshop & Mobile Field Service Teams' } },
    ],
    relatedProjectIds: ['tien-sa-rental', 'kalmar-ppap', 'cmit-cai-mep'],
    partnerIds: ['kalmar', 'bromma'],
  },
  {
    id: 'empty-handler',
    code: 'ECH',
    name: {
      vi: 'Xe nâng container rỗng',
      en: 'Empty Container Handler (ECH)',
    },
    oneLiner: {
      vi: 'Bảo dưỡng khung nâng cao tầng, cung cấp phụ tùng ngàm kẹp đơn/đôi, cho thuê thiết bị và sửa chữa thủy lực.',
      en: 'High-mast maintenance, single/double spreader parts, equipment rental, and hydraulic servicing.',
    },
    categoryLabel: {
      vi: 'Thiết bị khai thác bãi rỗng (Depot)',
      en: 'Empty Yard & Depot Operations',
    },
    capabilities: {
      maintenance: {
        vi: 'Kiểm tra căn chỉnh khung nâng (mast), xích nâng, con lăn dẫn hướng, hệ thống thủy lực và điện điều khiển ngàm kẹp.',
        en: 'Mast alignment, lifting chain tensioning, guide roller replacement, and spreader control diagnostics.',
      },
      spareParts: {
        vi: 'Cung cấp xích nâng chịu tải, ngàm khóa twistlock/hook, van phân phối thủy lực, cảm biến tiệm cận và phụ tùng Kalmar/Bromma.',
        en: 'Supply heavy-duty mast chains, twistlocks/hooks, hydraulic control valves, proximity sensors, and Kalmar/Bromma parts.',
      },
      upgrade: {
        vi: 'Đại tu khung nâng, phục hồi hộp số và nâng cấp hệ thống cảnh báo an toàn vận hành.',
        en: 'Mast structural overhaul, transmission reconditioning, and operational safety sensor upgrades.',
      },
      rental: {
        vi: 'Cho thuê xe nâng container rỗng xếp cao 6–8 tầng phục vụ cảng và depot lớn.',
        en: 'Rental of 6-to-8 high Empty Container Handlers for busy terminals and container depots.',
      },
    },
    specs: [
      { label: { vi: 'Khả năng xếp tầng', en: 'Stacking Capability' }, value: { vi: '8–10 Tấn · Xếp cao 6 đến 8 tầng rỗng', en: '8–10 Tons · 6 to 8 High Empty Stacking' } },
      { label: { vi: 'Hạng mục trọng tâm', en: 'Key Technical Focus' }, value: { vi: 'Khung nâng (Mast), Xích tải, Thủy lực & Ngàm', en: 'Mast Assembly, Lift Chains, Hydraulics & Spreader' } },
      { label: { vi: 'Đáp ứng nhanh', en: 'Rapid Deployment' }, value: { vi: 'Có sẵn đội kỹ thuật tại TP.HCM, Cái Mép, Hải Phòng, Đà Nẵng', en: 'Field teams in HCMC, Cái Mép, Hải Phòng & Đà Nẵng' } },
    ],
    relatedProjectIds: ['tien-sa-rental', 'kalmar-ppap'],
    partnerIds: ['kalmar', 'bromma'],
  },
  {
    id: 'terminal-tractor',
    code: 'TT',
    name: {
      vi: 'Xe đầu kéo cảng (Terminal Tractor)',
      en: 'Terminal Tractor',
    },
    oneLiner: {
      vi: 'Cho thuê đội xe đầu kéo nội cảng, đại tu động cơ - hộp số - mâm kéo thủy lực và cung ứng tài xế vận hành.',
      en: 'Yard tractor fleet rental, engine/transmission/fifth-wheel overhaul, and certified driver supply.',
    },
    categoryLabel: {
      vi: 'Vận chuyển ngang nội cảng',
      en: 'Horizontal Terminal Transport',
    },
    capabilities: {
      maintenance: {
        vi: 'Bảo dưỡng định kỳ đội xe đầu kéo hoạt động cường độ cao 24/7 giữa cầu bến và bãi container.',
        en: 'High-frequency preventive maintenance for 24/7 horizontal transport fleets operating between quay and yard.',
      },
      spareParts: {
        vi: 'Cung cấp phụ tùng động cơ, hộp số tự động Allison, cầu sau, xi-lanh nâng mâm kéo (fifth wheel) và phụ tùng Kalmar.',
        en: 'Genuine engine parts, Allison transmission components, drive axles, fifth-wheel lift cylinders, and Kalmar spares.',
      },
      upgrade: {
        vi: 'Đại tu đồng bộ đội xe đầu kéo cũ, phục hồi khung gầm, hệ thống khí nén phanh và làm mới cabin.',
        en: 'Fleet-wide refurbishment of aging tractors, chassis restoration, pneumatic brake rebuilds, and cabin renewal.',
      },
      rental: {
        vi: 'Cho thuê xe đầu kéo chuyên dụng nội cảng kèm rơ-moóc (chassis) và đội ngũ tài xế theo ca.',
        en: 'Lease terminal tractors with bomb-cart chassis and shift-based driver crews.',
      },
    },
    specs: [
      { label: { vi: 'Ứng dụng khai thác', en: 'Operational Role' }, value: { vi: 'Trung chuyển container Cầu cảng ↔ Bãi CY', en: 'Quayside-to-Yard Horizontal Container Transfer' } },
      { label: { vi: 'Dịch vụ chủ lực', en: 'Core Offerings' }, value: { vi: 'Cho thuê đội xe · Bảo trì trọn gói · Đại tu', en: 'Fleet Rental · Full Maintenance · Overhaul' } },
      { label: { vi: 'Đối tác phụ tùng', en: 'OEM Ecosystem' }, value: { vi: 'Kalmar & Phụ tùng truyền động chính hãng', en: 'Kalmar & Genuine Drivetrain Components' } },
    ],
    relatedProjectIds: ['tien-sa-rental', 'cmit-cai-mep'],
    partnerIds: ['kalmar'],
  },
  {
    id: 'mhc',
    code: 'MHC',
    name: {
      vi: 'Cẩu bờ di động (Mobile Harbor Crane)',
      en: 'Mobile Harbor & Material Handling Crane',
    },
    oneLiner: {
      vi: 'Phục vụ cả 2 dòng: Cẩu bờ di động bánh lốp và Cẩu xử lý hàng rời công nghiệp (Sennebogen) — bảo trì, cáp tải, nâng cấp điện.',
      en: 'Serving both Mobile Harbor Cranes and Sennebogen Industrial Material Handlers — maintenance, wire ropes, and electrical retrofits.',
    },
    categoryLabel: {
      vi: 'Cẩu đa năng & Xử lý hàng rời (2 phân khúc)',
      en: 'Multipurpose & Bulk Handling (2 Variants)',
    },
    capabilities: {
      maintenance: {
        vi: 'Bảo trì hệ thống thủy lực áp suất cao, cơ cấu quay toa (slewing), tời nâng, chân chống và hệ điều khiển điện tử.',
        en: 'High-pressure hydraulic servicing, slewing ring inspection, hoist winches, outriggers, and electronic load-moment controls.',
      },
      spareParts: {
        vi: 'Phụ tùng chính hãng Sennebogen, cáp chống xoắn Teufelberger, phanh Bubenzer, ngàm Bromma và xích dẫn cáp igus.',
        en: 'Genuine Sennebogen spares, Teufelberger rotation-resistant wire ropes, Bubenzer brakes, Bromma spreaders, and igus chains.',
      },
      upgrade: {
        vi: 'Nâng cấp hệ điều khiển PLC/biến tần, đại tu cơ cấu nâng hạ, phục hồi xi-lanh thủy lực lớn và di dời lắp dựng cẩu.',
        en: 'PLC/drive control upgrades, main cylinder reconditioning, winch overhauls, and turnkey crane relocation.',
      },
      rental: {
        vi: 'Hỗ trợ kỹ thuật chuyên sâu, kiểm định thử tải và đào tạo thợ vận hành cẩu bờ di động.',
        en: 'Specialized field engineering support, load testing certification, and operator training.',
      },
    },
    specs: [
      { label: { vi: '2 Dòng thiết bị phục vụ', en: '2 Equipment Sub-Types Covered' }, value: { vi: 'Cẩu tháp bờ di động (MHC) & Cẩu công nghiệp Sennebogen', en: 'Quay Mobile Harbor Cranes & Sennebogen Material Handlers' } },
      { label: { vi: 'Vật tư & Phụ tùng đặc thù', en: 'Critical OEM Components' }, value: { vi: 'Cáp chống xoắn Teufelberger · Phụ tùng Sennebogen', en: 'Teufelberger Non-Rotating Ropes · Sennebogen OEM Parts' } },
      { label: { vi: 'Năng lực kỹ thuật', en: 'Engineering Scope' }, value: { vi: 'Thủy lực công suất lớn · Hệ điều khiển · Di dời cẩu', en: 'High-Pressure Hydraulics · Control Retrofit · Relocation' } },
    ],
    relatedProjectIds: ['tan-thuan-relocation', 'kalmar-ppap'],
    partnerIds: ['sennebogen', 'teufelberger', 'bubenzer', 'bromma', 'igus'],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'rtg-sihanoukville',
    title: {
      vi: 'Đại tu, Retrofit Điện & Đào tạo Hệ thống Cẩu RTG tại Cảng Sihanoukville (PAS)',
      en: 'RTG Crane Overhaul, Electrical Retrofit & Training at Sihanoukville Autonomous Port (PAS)',
    },
    client: {
      vi: 'Cảng Quốc tế Sihanoukville (PAS)',
      en: 'Sihanoukville Autonomous Port (PAS)',
    },
    country: 'KH',
    countryLabel: { vi: 'Cambodia', en: 'Cambodia' },
    location: { vi: 'Sihanoukville, Cambodia', en: 'Sihanoukville, Cambodia' },
    serviceGroup: 'upgrades',
    serviceTag: { vi: 'Nâng cấp & Đại tu RTG', en: 'RTG Retrofit & Overhaul' },
    equipmentUsed: { vi: 'Cẩu khung bánh lốp RTG', en: 'RTG Cranes (Rubber-Tired Gantry)' },
    timeframe: '2025 – 2026',
    summary: {
      vi: 'Dự án trọng điểm tại Cambodia: cải tạo hệ thống điện - điều khiển PLC/biến tần, đại tu cơ khí, làm mới cabin, sơn phủ toàn bộ và đào tạo chuyển giao cho đội ngũ kỹ thuật cảng PAS.',
      en: 'Flagship Cambodia project: complete PLC/drive electrical retrofit, mechanical and genset overhaul, new operator cabin, full marine repainting, and on-site training for PAS personnel.',
    },
    challenge: {
      vi: 'Các cẩu RTG tại cảng Sihanoukville sau nhiều năm khai thác trong môi trường biển bị xuống cấp hệ thống kết cấu sơn, cabin tầm nhìn hạn chế, tủ điện điều khiển và biến tần đời cũ thường xuyên báo lỗi gây gián đoạn làm hàng.',
      en: 'After years of harsh coastal operation at Sihanoukville Port, the RTG fleet suffered severe structural paint degradation, aging cabins, and obsolete PLC/drive systems causing frequent unplanned stops.',
    },
    solution: {
      vi: 'NAVACO triển khai tổ hợp giải pháp: thiết kế và thay mới hệ thống tủ điện điều khiển PLC/biến tần Siemens, đại tu cụm cơ khí và genset, lắp đặt cabin điều khiển mới, phun cát sơn lại toàn bộ cẩu và tổ chức khóa đào tạo vận hành - xử lý sự cố tại chỗ cho nhân sự PAS.',
      en: 'NAVACO executed a turnkey modernization: replacing legacy controls with Siemens PLC/drives, overhauling mechanical assemblies and gensets, installing a new ergonomic cabin, full structural repainting, and delivering structured training for PAS operators and technicians.',
    },
    outcomes: [
      {
        vi: 'Khôi phục độ sẵn sàng và tính ổn định vận hành của cẩu RTG tương đương thiết bị thế hệ mới.',
        en: 'Restored RTG operational availability and motion smoothness to modern fleet standards.',
      },
      {
        vi: 'Hệ thống chẩn đoán lỗi trực quan giúp kỹ thuật viên cảng PAS rút ngắn thời gian xác định sự cố.',
        en: 'Integrated visual fault diagnostics enabled PAS technicians to pinpoint and resolve alarms rapidly.',
      },
      {
        vi: 'Đội ngũ vận hành và bảo trì tại Sihanoukville nắm vững quy trình khai thác an toàn sau khóa đào tạo thực địa.',
        en: 'PAS operating and maintenance crews achieved full autonomy following hands-on field training.',
      },
    ],
    beforeState: {
      label: { vi: 'TRƯỚC KHI NÂNG CẤP (BEFORE)', en: 'BEFORE MODERNIZATION' },
      metrics: [
        { vi: 'Tủ điện & PLC đời cũ hay dừng lỗi đột xuất', en: 'Obsolete PLC & drives causing frequent fault trips' },
        { vi: 'Kết cấu thép & lớp sơn bị ăn mòn muối biển', en: 'Marine corrosion across girder and leg structures' },
        { vi: 'Cabin cũ xuống cấp, thiếu màn hình chẩn đoán CMS', en: 'Aging operator cabin with no diagnostic HMI' },
      ],
      visualNote: {
        vi: 'Hiện trạng cẩu RTG trước đại tu: sơn bong tróc do hơi muối, cáp và tủ điều khiển thế hệ cũ.',
        en: 'Pre-overhaul condition: weathered coating, legacy relay/drive cabinets, and worn cabin interior.',
      },
    },
    afterState: {
      label: { vi: 'SAU KHI NÂNG CẤP & BÀN GIAO (AFTER)', en: 'AFTER RETROFIT & HANDOVER' },
      metrics: [
        { vi: 'Tủ điều khiển PLC & Biến tần Siemens vận hành ổn định', en: 'Modern Siemens PLC & Sinamics drives running smoothly' },
        { vi: 'Sơn phủ chống ăn mòn tiêu chuẩn biển & Cabin mới 100%', en: 'Full marine anti-corrosion coating & brand-new cabin' },
        { vi: 'Bàn giao kèm đào tạo thực hành cho kỹ thuật viên PAS', en: 'Complete handover with PAS operator & technician training' },
      ],
      visualNote: {
        vi: 'Cẩu RTG Sihanoukville sau đại tu: diện mạo mới sắc nét, tủ điện hiện đại và vận hành êm ái tại bãi.',
        en: 'Post-overhaul RTG at Sihanoukville: fresh protective coating, new cabin, and modernized drive control.',
      },
    },
    galleryCaptions: [
      { vi: 'Đội ngũ kỹ thuật viên NAVACO mặc đồng phục và đầy đủ bảo hộ thi công tại cảng Sihanoukville', en: 'NAVACO certified engineers in full PPE executing retrofit work at Sihanoukville Port' },
      { vi: 'Lắp đặt và đấu nối tủ điện điều khiển PLC / Biến tần thế hệ mới', en: 'Installation and wiring of modernized PLC and inverter drive cabinets' },
      { vi: 'Đào tạo chuyển giao công nghệ và hướng dẫn xử lý sự cố cho đội ngũ PAS', en: 'Hands-on operational and troubleshooting training session with PAS port team' },
    ],
    featured: true,
  },
  {
    id: 'kalmar-ppap',
    title: {
      vi: 'Tiếp nhận, Lắp dựng & Bàn giao Thiết bị Kalmar tại Cảng Phnom Penh (PPAP)',
      en: 'Reception, Assembly & Commissioning of Kalmar Equipment at Phnom Penh Autonomous Port (PPAP)',
    },
    client: {
      vi: 'Cảng Quốc tế Phnom Penh (PPAP)',
      en: 'Phnom Penh Autonomous Port (PPAP)',
    },
    country: 'KH',
    countryLabel: { vi: 'Cambodia', en: 'Cambodia' },
    location: { vi: 'Phnom Penh, Cambodia', en: 'Phnom Penh, Cambodia' },
    serviceGroup: 'upgrades',
    serviceTag: { vi: 'Lắp đặt & Bàn giao Thiết bị', en: 'Equipment Assembly & Commissioning' },
    equipmentUsed: { vi: 'Thiết bị nâng hạ Kalmar (RTG / Reach Stacker)', en: 'Kalmar Port Handling Fleet' },
    timeframe: '2025 – 2026',
    summary: {
      vi: 'Thực hiện tiếp nhận tại bến, lắp ráp cơ - điện - thủy lực, căn chỉnh thông số, thử tải kiểm định và bàn giao thiết bị Kalmar đưa vào khai thác tại cảng PPAP.',
      en: 'Executed quayside reception, mechanical-electrical-hydraulic assembly, calibration, load testing, and formal handover of Kalmar equipment at PPAP.',
    },
    challenge: {
      vi: 'Thiết bị vận chuyển đường thủy tới cảng Phnom Penh dưới dạng cụm rời đòi hỏi quy trình cẩu lắp chính xác, đấu nối hệ thống thủy lực - điện điều khiển đúng tiêu chuẩn hãng Kalmar trong điều kiện bến cảng đang khai thác nhộn nhịp.',
      en: 'Equipment arriving by river barge in modular sections required high-precision heavy lifting, contamination-free hydraulic assembly, and OEM calibration inside an active terminal.',
    },
    solution: {
      vi: 'NAVACO cử đội kỹ sư có chứng chỉ hãng sang trực tiếp hiện trường PPAP, lập biện pháp nâng hạ an toàn, lắp dựng hoàn chỉnh kết cấu, nạp thông số hiệu chuẩn, thực hiện thử tải và hướng dẫn đội ngũ PPAP vận hành.',
      en: 'NAVACO deployed OEM-certified engineers to PPAP to manage heavy lifting, complete mechanical and electrical integration, run full commissioning protocols, and train PPAP staff.',
    },
    outcomes: [
      {
        vi: 'Hoàn thành lắp dựng và thử tải đúng tiến độ cam kết với cảng PPAP và hãng Kalmar.',
        en: 'Completed assembly and load testing on schedule in full compliance with Kalmar OEM standards.',
      },
      {
        vi: 'Đảm bảo 100% an toàn lao động (Zero Incident) trong suốt quá trình cẩu lắp tải trọng lớn.',
        en: 'Achieved Zero Safety Incidents across all heavy lifting and commissioning stages.',
      },
      {
        vi: 'Thiết bị đi vào khai thác ngay, nâng cao năng lực xếp dỡ container cho cảng PPAP.',
        en: 'Equipment entered immediate commercial service, expanding container handling capacity at PPAP.',
      },
    ],
    beforeState: {
      label: { vi: 'KHI TIẾP NHẬN CỤM THIẾT BỊ TẠI BẾN (BEFORE)', en: 'MODULES ARRIVING AT QUAYSIDE (BEFORE)' },
      metrics: [
        { vi: 'Thiết bị ở trạng thái tháo rời vận chuyển trên sà lan', en: 'Equipment shipped in disassembled transport modules on barge' },
        { vi: 'Cần cẩu lắp tải trọng lớn trên mặt bến đang khai thác', en: 'Requires heavy rigging within an active river port berth' },
        { vi: 'Hệ thống cơ - điện - thủy lực chờ đấu nối & hiệu chuẩn', en: 'Mechanical, hydraulic & electronic systems awaiting integration' },
      ],
      visualNote: {
        vi: 'Các cụm kết cấu và máy móc thiết bị Kalmar khi cập bến cảng Phnom Penh (PPAP).',
        en: 'Kalmar structural and mechanical modules upon arrival at Phnom Penh Autonomous Port.',
      },
    },
    afterState: {
      label: { vi: 'HOÀN TẤT LẮP DỰNG & ĐƯA VÀO KHAI THÁC (AFTER)', en: 'FULLY ERECTED, TESTED & OPERATIONAL (AFTER)' },
      metrics: [
        { vi: 'Lắp dựng hoàn chỉnh, đạt 100% thông số kỹ thuật Kalmar', en: 'Fully assembled and calibrated to 100% Kalmar OEM specs' },
        { vi: 'Hoàn tất thử tải tĩnh & động, sẵn sàng xếp dỡ container', en: 'Passed static and dynamic load tests for commercial operation' },
        { vi: 'Bàn giao tài liệu kỹ thuật & Hướng dẫn vận hành tại chỗ', en: 'Complete documentation handover & operator familiarization' },
      ],
      visualNote: {
        vi: 'Thiết bị Kalmar hoàn thiện lắp dựng, vận hành xếp dỡ container ổn định tại bãi cảng PPAP.',
        en: 'Completed Kalmar equipment actively stacking containers at PPAP yard.',
      },
    },
    galleryCaptions: [
      { vi: 'Tiếp nhận và cẩu lắp các cụm kết cấu thiết bị Kalmar tại cầu cảng PPAP', en: 'Quayside unloading and heavy lifting of Kalmar equipment modules at PPAP' },
      { vi: 'Kỹ sư NAVACO kiểm tra đấu nối thủy lực và hiệu chuẩn hệ thống điều khiển', en: 'NAVACO engineers performing hydraulic checks and control system calibration' },
      { vi: 'Chạy thử tải nghiệm thu và bàn giao thiết bị đưa vào khai thác tại Phnom Penh', en: 'Load acceptance testing and official fleet handover in Phnom Penh' },
    ],
    featured: true,
  },
  {
    id: 'cmit-cai-mep',
    title: {
      vi: 'Bảo trì Trọn gói (FCM), Retrofit E-House & Cung ứng Thiết bị tại Cảng CMIT Cái Mép',
      en: 'Full Maintenance (FCM), E-House Retrofit & Fleet Support at CMIT Deepwater Port (Cái Mép)',
    },
    client: {
      vi: 'Cảng Quốc tế Cái Mép (CMIT)',
      en: 'Cái Mép International Terminal (CMIT)',
    },
    country: 'VN',
    countryLabel: { vi: 'Việt Nam', en: 'Vietnam' },
    location: { vi: 'Cái Mép – Thị Vải, Bà Rịa - Vũng Tàu, Việt Nam', en: 'Cái Mép – Thị Vải, Bà Rịa - Vũng Tàu, Vietnam' },
    serviceGroup: 'operations',
    serviceTag: { vi: 'Bảo trì FCM & Retrofit Điện', en: 'FCM Maintenance & E-House Retrofit' },
    equipmentUsed: { vi: 'Cẩu bờ STS, Cẩu RTG, Reach Stacker', en: 'STS Cranes, RTG Cranes, Reach Stackers' },
    timeframe: '2024 – 2026',
    summary: {
      vi: 'Triển khai mô hình bảo trì trọn gói (FCM) kết hợp lợi thế xưởng kỹ thuật NAVACO ngay tại Cái Mép, thực hiện nâng cấp tủ điện/E-House và cho thuê thiết bị nâng hạ lúc cao điểm.',
      en: 'Executed our signature Full Maintenance Contract (FCM) backed by NAVACO’s Cái Mép workshop, delivering E-House electrical retrofits and peak-season equipment rental.',
    },
    challenge: {
      vi: 'Là cảng nước sâu đón các siêu tàu container tuyến quốc tế, CMIT yêu cầu độ sẵn sàng thiết bị ở mức cao nhất; mọi công tác bảo trì hay nâng cấp phòng điện E-House phải được chuẩn bị kỹ để giảm tối đa thời gian dừng cẩu.',
      en: 'As a deepwater terminal serving ultra-large container vessels, CMIT requires maximum crane availability; any maintenance or E-House retrofit must minimize berth downtime.',
    },
    solution: {
      vi: 'NAVACO bố trí đội kỹ thuật viên thường trực tại cảng theo mô hình FCM, quản lý bảo trì bằng phần mềm chuyên dụng; đồng thời chế tạo và đấu nối sẵn cụm phòng điện E-House tại xưởng Việt Nam trước khi lắp đặt lên cẩu.',
      en: 'NAVACO stationed dedicated FCM engineering crews on-site with CMMS tracking, while pre-fabricating and testing complete E-House modules at our local workshop prior to installation.',
    },
    outcomes: [
      {
        vi: 'Duy trì độ sẵn sàng kỹ thuật cao cho đội cẩu và thiết bị nâng hạ phục vụ các chuyến tàu mẹ.',
        en: 'Sustained high fleet availability supporting mainline deepwater vessel calls.',
      },
      {
        vi: 'Giải pháp E-House chế tạo sẵn tại Việt Nam giúp rút ngắn đáng kể thời gian dừng cẩu thi công tại bến.',
        en: 'Locally pre-fabricated E-House modules significantly reduced on-site crane outage duration.',
      },
      {
        vi: 'Phản ứng tức thời nhờ xưởng kỹ thuật và kho vật tư NAVACO đặt ngay tại khu vực Cái Mép.',
        en: 'Immediate rapid-response support enabled by NAVACO’s permanent Cái Mép workshop facility.',
      },
    ],
    beforeState: {
      label: { vi: 'TRƯỚC KHI ÁP DỤNG MÔ HÌNH FCM & E-HOUSE MỚI (BEFORE)', en: 'BEFORE FCM & PRE-FABRICATED E-HOUSE RETROFIT' },
      metrics: [
        { vi: 'Áp lực nhân sự kỹ thuật khi nhiều tàu lớn cập bến cùng lúc', en: 'High technical workload during simultaneous mega-vessel calls' },
        { vi: 'Thi công thay tủ điện rời trên cao mất nhiều ngày dừng cẩu', en: 'Piece-by-piece panel replacement at height required extended crane outages' },
        { vi: 'Thiếu thiết bị dự phòng tức thời trong các đợt cao điểm', en: 'Peak-volume periods strained existing mobile yard equipment' },
      ],
      visualNote: {
        vi: 'Phòng điện cũ trên cẩu trước khi nâng cấp cụm E-House đồng bộ.',
        en: 'Legacy electrical room prior to modular E-House replacement.',
      },
    },
    afterState: {
      label: { vi: 'SAU KHI VẬN HÀNH FCM & LẮP ĐẶT E-HOUSE (AFTER)', en: 'AFTER FCM DEPLOYMENT & E-HOUSE INTEGRATION' },
      metrics: [
        { vi: 'Đội kỹ thuật FCM trực 24/7 + theo dõi bằng phần mềm bảo trì', en: '24/7 on-site FCM crew + digital CMMS maintenance tracking' },
        { vi: 'Cụm E-House chế tạo sẵn tại Việt Nam, lắp đặt nhanh gọn', en: 'Pre-fabricated E-House built in Vietnam for rapid plug-and-play install' },
        { vi: 'Bổ sung kịp thời thiết bị cho thuê từ xưởng Cái Mép', en: 'Seamless peak-season Reach Stacker rental backed by Cái Mép workshop' },
      ],
      visualNote: {
        vi: 'Cụm E-House mới tích hợp tủ điện Siemens và đội ngũ kỹ thuật NAVACO trực vận hành tại CMIT.',
        en: 'Modernized E-House module with Siemens switchgear and NAVACO on-site FCM team at CMIT.',
      },
    },
    galleryCaptions: [
      { vi: 'Chế tạo và nghiệm thu xưởng (FAT) phòng điện E-House tại Việt Nam', en: 'Fabrication and Factory Acceptance Testing (FAT) of the E-House module in Vietnam' },
      { vi: 'Đội ngũ kỹ thuật viên FCM của NAVACO kiểm tra định kỳ thiết bị tại cảng CMIT Cái Mép', en: 'NAVACO FCM technicians conducting preventive maintenance checks at CMIT Cái Mép' },
      { vi: 'Cung ứng thiết bị nâng container hỗ trợ khai thác giai đoạn cao điểm', en: 'Deploying rental container handling equipment during peak terminal operations' },
    ],
    featured: true,
  },
  {
    id: 'stoll-phnom-penh',
    title: {
      vi: 'Thi công Hệ thống Điện Trung/Hạ Thế & Busbar Nhà máy STOLL tại Phnom Penh',
      en: 'MV/LV Substation & Busbar Trunking Installation for STOLL Plant in Phnom Penh',
    },
    client: {
      vi: 'Nhà máy Công nghiệp STOLL',
      en: 'STOLL Industrial Facility',
    },
    country: 'KH',
    countryLabel: { vi: 'Cambodia', en: 'Cambodia' },
    location: { vi: 'Phnom Penh, Cambodia', en: 'Phnom Penh, Cambodia' },
    serviceGroup: 'infrastructure',
    serviceTag: { vi: 'Hạ tầng & Năng lượng', en: 'Infrastructure & Power' },
    equipmentUsed: { vi: 'Trạm biến áp, Tủ Trung thế/Hạ thế, Hệ thống Busbar', en: 'MV/LV Switchgear, Transformers & Busbar Trunking' },
    timeframe: '2025',
    summary: {
      vi: 'Thiết kế, cung cấp và thi công lắp đặt đồng bộ hệ thống trạm biến áp, tủ điện trung thế, tủ phân phối hạ thế và hệ thống thanh cái dẫn điện (busbar) cho nhà máy STOLL tại Phnom Penh.',
      en: 'Engineered, supplied, and installed the complete transformer substation, MV switchgear, LV distribution boards, and overhead busbar trunking system for STOLL in Phnom Penh.',
    },
    challenge: {
      vi: 'Nhà máy sản xuất công nghiệp yêu cầu nguồn điện có độ ổn định cao, phân phối công suất lớn tới từng dãy máy bằng hệ thống busbar trên cao với tiến độ thi công gấp và tiêu chuẩn an toàn nghiêm ngặt.',
      en: 'The manufacturing facility required rock-solid power stability and high-amperage overhead busbar distribution across machine lines under a tight construction schedule.',
    },
    solution: {
      vi: 'NAVACO huy động đội ngũ kỹ sư điện công nghiệp sang Phnom Penh, lắp đặt trọn gói tủ trung/hạ thế tiêu chuẩn IEC, căn chỉnh hệ busbar chính xác bằng laser và thực hiện đầy đủ các bước thí nghiệm điện trước khi đóng điện.',
      en: 'NAVACO deployed industrial electrical engineers to Phnom Penh to install IEC-certified MV/LV panels, laser-align overhead busbar runs, and execute full electrical testing before energization.',
    },
    outcomes: [
      {
        vi: 'Hệ thống điện trung/hạ thế và busbar vượt qua toàn bộ bài kiểm tra cách điện và bảo vệ rơ-le ngay lần đầu.',
        en: 'MV/LV switchgear and busbar trunking passed all insulation and relay protection tests on first inspection.',
      },
      {
        vi: 'Cấp nguồn ổn định, an toàn và dễ dàng mở rộng điểm lấy điện (plug-in) cho dây chuyền máy móc của STOLL.',
        en: 'Delivered reliable, expandable plug-in power distribution across STOLL’s production floor.',
      },
    ],
    beforeState: {
      label: { vi: 'HIỆN TRẠNG MẶT BẰNG NHÀ XƯỞNG TRƯỚC THI CÔNG (BEFORE)', en: 'GREENFIELD PLANT FLOOR PRIOR TO ELECTRIFICATION' },
      metrics: [
        { vi: 'Chưa có trạm biến áp và hệ thống phân phối nguồn trục chính', en: 'No primary transformer substation or main LV distribution backbone' },
        { vi: 'Yêu cầu cấp nguồn linh hoạt cho nhiều dãy máy công suất lớn', en: 'Required high-density power feeds across multiple machine bays' },
      ],
      visualNote: {
        vi: 'Khu vực phòng kỹ thuật điện và trần nhà xưởng STOLL trước khi lắp đặt tủ điện và busbar.',
        en: 'STOLL electrical room and overhead truss structure prior to switchgear and busbar installation.',
      },
    },
    afterState: {
      label: { vi: 'HOÀN THIỆN TRẠM ĐIỆN & HỆ THỐNG BUSBAR (AFTER)', en: 'COMPLETED MV/LV SUBSTATION & BUSBAR SYSTEM (AFTER)' },
      metrics: [
        { vi: 'Tủ Trung/Hạ thế & Trạm biến áp vận hành chuẩn tiêu chuẩn IEC', en: 'IEC-compliant MV/LV switchgear & transformer station energized' },
        { vi: 'Hệ thống Busbar lắp đặt thẳng hàng, thẩm mỹ & an toàn cao', en: 'Precision-aligned busbar trunking with modular tap-off units' },
      ],
      visualNote: {
        vi: 'Phòng tủ điện trung/hạ thế và tuyến busbar hoàn thiện sắc nét tại nhà máy STOLL Phnom Penh.',
        en: 'Completed MV/LV switchboard room and overhead busbar distribution at STOLL Phnom Penh.',
      },
    },
    galleryCaptions: [
      { vi: 'Lắp đặt và đấu nối hệ thống tủ trung thế - hạ thế tại phòng điện nhà máy STOLL', en: 'Installation and termination of MV and LV switchboards inside STOLL electrical room' },
      { vi: 'Thi công hệ thống thanh cái dẫn điện (Busbar) dọc trục nhà xưởng tại Phnom Penh', en: 'Overhead busbar trunking installation along the main production bay in Phnom Penh' },
    ],
    featured: false,
  },
  {
    id: 'tan-thuan-relocation',
    title: {
      vi: 'Tháo dỡ, Vận chuyển & Di dời Cẩu Bờ tại Cảng Tân Thuận',
      en: 'Dismantling, Heavy Transport & Relocation of Quay Crane at Tân Thuận Port',
    },
    client: {
      vi: 'Khu vực Cảng Tân Thuận (TP.HCM)',
      en: 'Tân Thuận Port Terminal (HCMC)',
    },
    country: 'VN',
    countryLabel: { vi: 'Việt Nam', en: 'Vietnam' },
    location: { vi: 'Quận 7, TP. Hồ Chí Minh, Việt Nam', en: 'District 7, Ho Chi Minh City, Vietnam' },
    serviceGroup: 'upgrades',
    serviceTag: { vi: 'Nâng hạ & Di dời Cẩu', en: 'Crane Relocation & Heavy Lift' },
    equipmentUsed: { vi: 'Cẩu bờ cảng biển', en: 'Quayside Port Crane' },
    timeframe: '2025',
    summary: {
      vi: 'Lập biện pháp kỹ thuật, tháo dỡ an toàn, vận chuyển đường thủy và lắp dựng lại cẩu bờ phục vụ quy hoạch khai thác mới tại khu vực cảng Tân Thuận.',
      en: 'Engineered method statements, safely dismantled, barge-transported, and re-erected quayside crane assets to support terminal reallocation at Tân Thuận.',
    },
    challenge: {
      vi: 'Mặt bằng cầu cảng hạn chế, chịu ảnh hưởng trực tiếp của chế độ bán nhật triều sông Sài Gòn và mật độ tàu thuyền qua lại cao.',
      en: 'Constrained quay workspace subject to Saigon River semi-diurnal tides and dense river vessel traffic.',
    },
    solution: {
      vi: 'NAVACO tính toán chi tiết tải trọng mặt bến, neo giữ sà lan, sử dụng cẩu hạng nặng tháo hạ từng cụm kết cấu theo đúng khung giờ thủy triều và lắp dựng lại an toàn tuyệt đối.',
      en: 'NAVACO engineered precise quay load distribution and barge mooring plans, executing heavy crane lifts within calculated tidal windows.',
    },
    outcomes: [
      {
        vi: 'Di dời thành công cẩu bờ đúng tiến độ, không ảnh hưởng tới hoạt động của các bến lân cận.',
        en: 'Successfully relocated the crane on schedule without disrupting adjacent berth operations.',
      },
      {
        vi: 'Sau khi lắp dựng lại, cẩu đạt đầy đủ các tiêu chuẩn căn chỉnh hình học và kiểm định thử tải.',
        en: 'Post-relocation crane passed all geometric alignment and statutory load certification tests.',
      },
    ],
    beforeState: {
      label: { vi: 'CẨU TẠI VỊ TRÍ BẾN CŨ TRƯỚC KHI DI DỜI (BEFORE)', en: 'CRANE AT ORIGINAL BERTH PRIOR TO RELOCATION' },
      metrics: [
        { vi: 'Cần di dời sang bến mới theo quy hoạch khai thác cảng', en: 'Required relocation to new berth per terminal masterplan' },
        { vi: 'Yêu cầu tính toán ổn định kết cấu và tải trọng cầu cảng', en: 'Demanded rigorous structural bracing and quay load calculations' },
      ],
      visualNote: {
        vi: 'Công tác chuẩn bị gia cố kết cấu và móc cáp trước khi hạ giải cẩu tại cảng Tân Thuận.',
        en: 'Structural bracing and rigging preparation prior to crane dismantling at Tân Thuận Port.',
      },
    },
    afterState: {
      label: { vi: 'HOÀN TẤT DI DỜI & LẮP DỰNG TẠI BẾN MỚI (AFTER)', en: 'RE-ERECTED & CERTIFIED AT NEW BERTH (AFTER)' },
      metrics: [
        { vi: 'Vận chuyển đường thủy và lắp dựng an toàn 100%', en: '100% safe marine transport and re-erection completed' },
        { vi: 'Hoàn tất căn chỉnh cơ - điện và kiểm định đưa vào vận hành', en: 'Completed mechanical/electrical alignment and load testing' },
      ],
      visualNote: {
        vi: 'Cẩu bờ sau khi hoàn tất lắp dựng, căn chỉnh và thử tải tại vị trí khai thác mới.',
        en: 'Quay crane fully re-erected, aligned, and load-tested at its new operating berth.',
      },
    },
    galleryCaptions: [
      { vi: 'Phối hợp cẩu hạng nặng và sà lan trong quá trình di dời cẩu tại cảng Tân Thuận', en: 'Coordinating heavy mobile cranes and marine barge during Tân Thuận crane relocation' },
      { vi: 'Căn chỉnh cơ khí, đấu nối lại hệ thống điện và thử tải bàn giao', en: 'Mechanical alignment, electrical reconnection, and final load testing' },
    ],
    featured: false,
  },
  {
    id: 'tien-sa-rental',
    title: {
      vi: 'Cho thuê Thiết bị Nâng Container & Bảo trì tại Cảng Tiên Sa (Đà Nẵng) & CMIT',
      en: 'Reach Stacker & Container Handler Rental with Full Maintenance at Tiên Sa Port (Đà Nẵng) & CMIT',
    },
    client: {
      vi: 'Cảng Tiên Sa Đà Nẵng & Cảng CMIT Cái Mép',
      en: 'Tiên Sa Port (Đà Nẵng) & CMIT Terminal',
    },
    country: 'VN',
    countryLabel: { vi: 'Việt Nam', en: 'Vietnam' },
    location: { vi: 'Đà Nẵng & Bà Rịa - Vũng Tàu, Việt Nam', en: 'Đà Nẵng & Bà Rịa - Vũng Tàu, Vietnam' },
    serviceGroup: 'operations',
    serviceTag: { vi: 'Cho thuê Thiết bị & Bảo trì', en: 'Equipment Rental & Maintenance' },
    equipmentUsed: { vi: 'Reach Stacker, Xe nâng container, Xe đầu kéo', en: 'Reach Stackers, Container Handlers, Terminal Tractors' },
    timeframe: '2024 – 2026',
    summary: {
      vi: 'Cung cấp dịch vụ cho thuê xe nâng chụp Reach Stacker, xe nâng container và xe đầu kéo kèm gói bảo trì kỹ thuật trọn gói tại Đà Nẵng và khu vực Cái Mép.',
      en: 'Provided Reach Stackers, container handlers, and terminal tractors on flexible rental contracts complete with on-site preventive maintenance in Đà Nẵng and Cái Mép.',
    },
    challenge: {
      vi: 'Các cảng cần bổ sung nhanh thiết bị nâng hạ có độ tin cậy cao để giải tỏa hàng hóa giai đoạn cao điểm mà không làm phát sinh gánh nặng bảo trì cho đội ngũ nội bộ.',
      en: 'Terminals needed rapid deployment of reliable container handling machinery for peak cargo periods without adding maintenance burden to internal teams.',
    },
    solution: {
      vi: 'NAVACO bàn giao thiết bị đã được bảo dưỡng chuẩn mực tại xưởng Cái Mép, đồng thời bố trí kỹ thuật viên tại Đà Nẵng và Bà Rịa - Vũng Tàu thực hiện bảo trì định kỳ suốt thời gian thuê.',
      en: 'NAVACO delivered pre-inspected machinery from our Cái Mép workshop and assigned regional technicians in Đà Nẵng and Vũng Tàu for full maintenance coverage.',
    },
    outcomes: [
      {
        vi: 'Đáp ứng tức thời nhu cầu tăng năng lực xếp dỡ bãi tại cả miền Trung (Đà Nẵng) và miền Nam (Cái Mép).',
        en: 'Immediately boosted yard handling capacity across Central (Đà Nẵng) and Southern (Cái Mép) terminals.',
      },
      {
        vi: 'Khách hàng hoàn toàn yên tâm khai thác với cam kết bảo trì và cung cấp vật tư thay thế từ NAVACO.',
        en: 'Zero maintenance headache for port operators thanks to NAVACO’s all-inclusive servicing and spare parts support.',
      },
    ],
    beforeState: {
      label: { vi: 'ÁP LỰC XẾP DỠ LÚC CAO ĐIỂM (BEFORE)', en: 'PEAK VOLUME YARD BOTTLENECK (BEFORE)' },
      metrics: [
        { vi: 'Thiếu thiết bị nâng hạ dự phòng khi sản lượng tàu tăng cao', en: 'Shortage of backup reach stackers during vessel arrival surges' },
        { vi: 'Thời gian chờ mua thiết bị mới kéo dài nhiều tháng', en: 'New equipment procurement lead times exceeded operational window' },
      ],
      visualNote: {
        vi: 'Nhu cầu cấp thiết bổ sung Reach Stacker và xe nâng container tại bãi cảng.',
        en: 'Urgent requirement for additional Reach Stacker capacity in the container yard.',
      },
    },
    afterState: {
      label: { vi: 'BỔ SUNG ĐỘI XE CHO THUÊ CỦA NAVACO (AFTER)', en: 'NAVACO RENTAL FLEET DEPLOYED ON-SITE (AFTER)' },
      metrics: [
        { vi: 'Bàn giao nhanh Reach Stacker & Xe nâng đã kiểm định', en: 'Rapid mobilization of certified Reach Stackers & handlers' },
        { vi: 'Bảo trì trọn gói định kỳ bởi kỹ thuật viên khu vực Đà Nẵng & Cái Mép', en: 'Full preventive maintenance by Đà Nẵng & Cái Mép field teams' },
      ],
      visualNote: {
        vi: 'Thiết bị cho thuê của NAVACO hoạt động ổn định tại cảng Tiên Sa Đà Nẵng và CMIT.',
        en: 'NAVACO rental Reach Stacker operating continuously at Tiên Sa Port and CMIT.',
      },
    },
    galleryCaptions: [
      { vi: 'Kiểm định kỹ thuật xe nâng Reach Stacker trước khi bàn giao cho khách hàng thuê', en: 'Technical inspection of Reach Stacker prior to rental handover' },
      { vi: 'Bảo dưỡng định kỳ thiết bị cho thuê tại hiện trường cảng Tiên Sa, Đà Nẵng', en: 'Scheduled on-site maintenance of rental fleet at Tiên Sa Port, Đà Nẵng' },
    ],
    featured: false,
  },
];

export const PARTNERS: PartnerItem[] = [
  {
    id: 'siemens',
    name: 'Siemens',
    country: { vi: 'Đức (Germany)', en: 'Germany' },
    category: { vi: 'Tự động hóa, Biến tần & Điện bờ', en: 'Drives, Automation & Shore Power' },
    whatNavacoProvides: {
      vi: 'NAVACO cung cấp, lập trình và tích hợp PLC Simatic, biến tần Sinamics, hệ thống SCADA/CMS, tủ điện trung/hạ thế và giải pháp điện bờ cùng Siemens.',
      en: 'NAVACO supplies, programs, and integrates Siemens Simatic PLCs, Sinamics drives, SCADA/CMS, MV/LV switchgear, and Shore Power solutions.',
    },
    components: [
      { vi: 'PLC Simatic S7 & Hệ thống SCADA/CMS', en: 'Simatic S7 PLCs & Crane SCADA/CMS' },
      { vi: 'Biến tần Sinamics S120 / G120 cho cẩu STS, RTG', en: 'Sinamics S120 / G120 Crane Drives' },
      { vi: 'Tủ điện Trung/Hạ thế & Giải pháp Điện bờ (Shore Power)', en: 'MV/LV Switchgear & Shore Power Systems' },
    ],
  },
  {
    id: 'kalmar',
    name: 'Kalmar',
    country: { vi: 'Phần Lan (Finland)', en: 'Finland' },
    category: { vi: 'Thiết bị nâng hạ cảng biển', en: 'Port Container Handling Equipment' },
    whatNavacoProvides: {
      vi: 'NAVACO thực hiện dịch vụ lắp dựng, bảo trì, đại tu, cung cấp phụ tùng chính hãng cho các dòng cẩu RTG, Reach Stacker, xe nâng rỗng và xe đầu kéo Kalmar.',
      en: 'NAVACO provides erection, maintenance, overhaul, and genuine OEM spare parts for Kalmar RTGs, Reach Stackers, Empty Handlers, and Terminal Tractors.',
    },
    components: [
      { vi: 'Lắp dựng & Bàn giao thiết bị Kalmar mới (như tại PPAP)', en: 'New Kalmar Fleet Assembly & Commissioning (e.g., PPAP)' },
      { vi: 'Phụ tùng chính hãng động cơ, thủy lực, truyền động & điện', en: 'Genuine Engine, Hydraulic, Drivetrain & Electrical Parts' },
      { vi: 'Bảo trì định kỳ & Đại tu thiết bị nâng Kalmar', en: 'Preventive Maintenance & Full Machine Overhaul' },
    ],
  },
  {
    id: 'bromma',
    name: 'Bromma',
    country: { vi: 'Thụy Điển (Sweden)', en: 'Sweden' },
    category: { vi: 'Ngàm chụp container (Spreader)', en: 'Crane & Mobile Spreaders' },
    whatNavacoProvides: {
      vi: 'NAVACO cung cấp phụ tùng chính hãng, sửa chữa kết cấu, thay thế twistlock, hộp số flipper và nâng cấp điện điều khiển cho ngàm chụp container Bromma.',
      en: 'NAVACO supplies genuine Bromma spreader parts, twistlock assemblies, flipper gearboxes, structural repairs, and SCS control upgrades.',
    },
    components: [
      { vi: 'Chốt khóa gù (Twistlocks), Cảm biến & Hộp điều khiển SCS', en: 'Twistlocks, Proximity Sensors & SCS Control Units' },
      { vi: 'Cụm tay hướng dẫn (Flipper arms), Hộp số & Thủy lực ngàm', en: 'Flipper Arms, Gearboxes & Spreader Hydraulic Packs' },
      { vi: 'Đại tu & Căn chỉnh ngàm STS, RTG, Reach Stacker', en: 'Spreader Structural Refurbishment & Calibration' },
    ],
  },
  {
    id: 'bubenzer',
    name: 'Dellner Bubenzer',
    country: { vi: 'Đức (Germany)', en: 'Germany' },
    category: { vi: 'Hệ thống phanh công nghiệp cẩu cảng', en: 'Industrial Crane Braking Systems' },
    whatNavacoProvides: {
      vi: 'NAVACO tư vấn mã, cung cấp và lắp đặt hoàn chỉnh phanh đĩa thủy lực, phanh tang trống điện-thủy lực (thruster) và má phanh chính hãng Bubenzer cho cẩu STS/RTG.',
      en: 'NAVACO specifies, supplies, and calibrates genuine Bubenzer hydraulic disc brakes, electro-hydraulic thruster drum brakes, and brake linings for STS/RTG cranes.',
    },
    components: [
      { vi: 'Phanh tang trống & Bầu đẩy thủy lực Eldro / Ed thruster', en: 'Drum Brakes & Electro-Hydraulic Thrusters' },
      { vi: 'Phanh đĩa an toàn (Storm & Emergency Disc Brakes)', en: 'Emergency Hoist & Storm Holding Disc Brakes' },
      { vi: 'Má phanh, Đĩa phanh, Khớp nối & Bộ nguồn thủy lực', en: 'Brake Linings, Discs, Couplings & Hydraulic Power Packs' },
    ],
  },
  {
    id: 'igus',
    name: 'igus',
    country: { vi: 'Đức (Germany)', en: 'Germany' },
    category: { vi: 'Xích dẫn cáp, Cáp chịu uốn & Điện bờ', en: 'Energy Chains, Cables & Shore Power' },
    whatNavacoProvides: {
      vi: 'NAVACO cung cấp và lắp đặt hệ thống xích nhựa dẫn cáp (e-chain), cáp động lực/quang chịu uốn chainflex thay thế festoon truyền thống, và hệ ổ cắm điện bờ igus.',
      en: 'NAVACO supplies and installs igus heavy-duty energy chains, chainflex cables replacing legacy festoons, E-RTG cable guidance, and iMSPO shore power outlets.',
    },
    components: [
      { vi: 'Hệ thống xích dẫn cáp e-chain cho xe con cẩu STS & E-RTG', en: 'Heavy-Duty e-chain Systems for STS Trolleys & E-RTGs' },
      { vi: 'Cáp điều khiển, cáp động lực & cáp quang chịu uốn chainflex', en: 'Chainflex Torsion & Bending-Resistant Crane Cables' },
      { vi: 'Hệ thống ổ cắm điện bờ di động (iMSPO) cho cầu cảng', en: 'Mobile Shore Power Outlet (iMSPO) Quay Systems' },
    ],
  },
  {
    id: 'teufelberger',
    name: 'Teufelberger',
    country: { vi: 'Áo (Austria)', en: 'Austria' },
    category: { vi: 'Cáp thép chịu lực chuyên dụng cẩu cảng', en: 'High-Performance Crane Wire Ropes' },
    whatNavacoProvides: {
      vi: 'NAVACO cung cấp cáp thép cường độ cao, cáp chống xoắn chính hãng Teufelberger và thực hiện dịch vụ thay cáp, luồn cáp (reeving) an toàn tại cảng.',
      en: 'NAVACO supplies genuine Teufelberger high-strength and rotation-resistant wire ropes along with turnkey on-site rope reeving services.',
    },
    components: [
      { vi: 'Cáp nâng hạ chính (Main Hoist) & Cáp nâng cần (Boom Hoist)', en: 'Main Hoist & Boom Hoist High-Endurance Wire Ropes' },
      { vi: 'Cáp kéo xe con (Trolley) & Cáp chống xoắn cho cẩu MHC', en: 'Trolley Travel & Rotation-Resistant MHC Ropes' },
      { vi: 'Dịch vụ thay cáp, kẹp đầu cáp & Kiểm tra từ tính (MRT)', en: 'Turnkey Rope Reeving, Socket Termination & Inspection' },
    ],
  },
  {
    id: 'sennebogen',
    name: 'Sennebogen',
    country: { vi: 'Đức (Germany)', en: 'Germany' },
    category: { vi: 'Cẩu bờ di động & Cẩu xử lý hàng rời', en: 'Material Handlers & Harbor Cranes' },
    whatNavacoProvides: {
      vi: 'NAVACO cung cấp phụ tùng chính hãng, bảo dưỡng hệ thống thủy lực - cơ khí và sửa chữa chuyên sâu cho các dòng cẩu công nghiệp và cảng biển Sennebogen.',
      en: 'NAVACO delivers genuine OEM spare parts, hydraulic system maintenance, and specialized repairs for Sennebogen port and industrial material handlers.',
    },
    components: [
      { vi: 'Phụ tùng thủy lực, Bơm chính, Van phân phối & Xi-lanh', en: 'Main Hydraulic Pumps, Control Valves & Cylinders' },
      { vi: 'Phụ tùng cơ cấu quay toa, Chân chống & Gầu ngoạm hàng rời', en: 'Slewing Rings, Outriggers & Bulk Clamshell Grabs' },
      { vi: 'Bảo trì định kỳ & Đại tu cẩu Sennebogen tại cảng/nhà máy', en: 'Scheduled Servicing & Overhaul for Sennebogen Cranes' },
    ],
  },
  {
    id: 'alimak',
    name: 'Alimak',
    country: { vi: 'Thụy Điển (Sweden)', en: 'Sweden' },
    category: { vi: 'Thang máy công nghiệp trên cẩu STS', en: 'Industrial Crane Elevators' },
    whatNavacoProvides: {
      vi: 'NAVACO cung cấp phụ tùng chính hãng, lắp đặt, bảo trì định kỳ và kiểm định an toàn hệ thống thang máy công nghiệp ALIMAK trên cẩu bờ STS và nhà máy.',
      en: 'NAVACO supplies genuine parts, installation, periodic maintenance, and safety device testing for ALIMAK rack-and-pinion elevators on STS cranes.',
    },
    components: [
      { vi: 'Cụm phanh bảo hiểm (Safety Device), Hộp số & Thanh răng', en: 'Safety Devices, Gearboxes, Pinions & Rack Sections' },
      { vi: 'Tủ điều khiển thang máy, Cảm biến tầng & Cáp dẹt đi kèm', en: 'Elevator Control Panels, Landing Sensors & Trailing Cables' },
      { vi: 'Bảo dưỡng định kỳ & Kiểm định an toàn thang máy cẩu cảng', en: 'Periodic Maintenance & Safety Drop-Test Support' },
    ],
  },
];

export const NEWS_ARTICLES: NewsItem[] = [
  {
    id: 'sihanoukville-ep10-handover',
    category: 'project',
    categoryLabel: { vi: 'Tin dự án', en: 'Project News' },
    date: '15/10/2026',
    seriesBadge: {
      vi: 'Chuỗi bài Sihanoukville · Kỳ 10',
      en: 'Sihanoukville Series · Part 10',
    },
    title: {
      vi: 'Hoàn tất đại tu, retrofit điện và bàn giao cẩu RTG tại Cảng Sihanoukville (PAS), Cambodia',
      en: 'Completing Full Overhaul, Electrical Retrofit & Handover of RTG Cranes at Sihanoukville Port (PAS)',
    },
    excerpt: {
      vi: 'Khép lại hành trình thi công xuyên suốt tại Sihanoukville: từ cải tạo tủ điện PLC/biến tần Siemens, thay mới cabin, sơn phủ toàn bộ đến khóa đào tạo vận hành thực tế cho đội ngũ kỹ thuật cảng PAS.',
      en: 'Concluding our multi-stage engineering mission in Sihanoukville: from Siemens PLC/drive modernization and cabin replacement to full marine repainting and PAS crew training.',
    },
    content: [
      {
        vi: 'Dự án nâng cấp và đại tu hệ thống cẩu RTG tại Cảng Quốc tế Sihanoukville (PAS) là một trong những dấu ấn kỹ thuật tiêu biểu của đội ngũ NAVACO tại thị trường Cambodia. Toàn bộ quá trình được ghi nhận qua chuỗi 10 bài nhật ký công trường trên fanpage chính thức của NAVACO.',
        en: 'The RTG crane overhaul and retrofit project at Sihanoukville Autonomous Port (PAS) stands as a milestone engineering achievement for NAVACO in Cambodia, documented across our 10-part field series.',
      },
      {
        vi: 'Tại hiện trường, các kỹ sư và kỹ thuật viên NAVACO đã thực hiện đồng bộ việc thay thế hệ điều khiển PLC và biến tần cũ bằng giải pháp Siemens hiện đại, đại tu tổ máy phát điện (genset), lắp đặt cabin điều khiển tầm nhìn rộng mới và sơn phủ chống ăn mòn tiêu chuẩn biển.',
        en: 'On site, NAVACO engineers replaced obsolete control panels with modern Siemens PLCs and Sinamics drives, overhauled the diesel gensets, installed new operator cabins, and applied a full marine-grade coating system.',
      },
      {
        vi: 'Đặc biệt, ngay sau khi hoàn tất thử tải nghiệm thu, NAVACO đã tổ chức chương trình đào tạo trực tiếp cho người vận hành và kỹ thuật viên bảo trì của PAS để làm chủ hoàn toàn hệ thống mới.',
        en: 'Immediately following load acceptance testing, NAVACO conducted hands-on training workshops for PAS operators and maintenance technicians to ensure smooth long-term operation.',
      },
    ],
    relatedProjectId: 'rtg-sihanoukville',
  },
  {
    id: 'ehouse-retrofit-technical',
    category: 'technical',
    categoryLabel: { vi: 'Kiến thức kỹ thuật', en: 'Technical Insights' },
    date: '02/10/2026',
    seriesBadge: {
      vi: 'Chuyên đề Kỹ thuật Cẩu Cảng',
      en: 'Port Crane Engineering Deep-Dive',
    },
    title: {
      vi: 'Giải pháp E-House chế tạo sẵn tại Việt Nam: Rút ngắn thời gian dừng cẩu khi Retrofit STS & RTG',
      en: 'Pre-Fabricated E-House Modules in Vietnam: Minimizing Crane Downtime During STS & RTG Retrofits',
    },
    excerpt: {
      vi: 'Thay vì tháo lắp từng tủ điện trên cao trong nhiều tuần, phương pháp chế tạo, đấu dây và chạy thử (FAT) nguyên cụm phòng điện E-House tại xưởng Việt Nam giúp rút ngắn tối đa thời gian cẩu ngừng làm hàng.',
      en: 'Instead of weeks of piece-by-piece panel replacement at height, building and factory-testing a complete E-House electrical room in Vietnam drastically cuts berth outage time.',
    },
    content: [
      {
        vi: 'Khi nâng cấp (retrofit) hệ thống điện và điều khiển cho các cẩu STS hoặc RTG đã vận hành 12–15 năm, thách thức lớn nhất đối với cảng biển không chỉ là chi phí thiết bị mà là thời gian dừng cẩu (downtime).',
        en: 'When retrofitting electrical and automation systems on 12-to-15-year-old STS or RTG cranes, the biggest challenge for terminal operators is minimizing crane downtime.',
      },
      {
        vi: 'Với năng lực kỹ thuật và xưởng dịch vụ tại Việt Nam, NAVACO triển khai phương án chế tạo sẵn toàn bộ phòng điện E-House tích hợp tủ trung/hạ thế, biến tần Siemens, PLC, hệ thống làm mát và chiếu sáng. Toàn bộ logic điều khiển được kiểm tra FAT tại xưởng trước khi vận chuyển ra cảng.',
        en: 'Leveraging our engineering team and Cái Mép workshop in Vietnam, NAVACO pre-fabricates complete E-House rooms housing Siemens drives, PLCs, HVAC, and switchgear—completing full Factory Acceptance Testing (FAT) before shipping to the quay.',
      },
      {
        vi: 'Khi cẩu dừng theo lịch, đội thi công chỉ cần hạ phòng điện cũ, cẩu lắp E-House mới và kết nối cáp ngoài, giúp cẩu nhanh chóng quay lại phục vụ tuyến tàu.',
        en: 'During the planned outage window, the legacy electrical room is lifted off and replaced with the pre-tested E-House, returning the crane to commercial service rapidly.',
      },
    ],
    relatedProjectId: 'cmit-cai-mep',
  },
  {
    id: 'ppap-kalmar-commissioning',
    category: 'event',
    categoryLabel: { vi: 'Sự kiện & Hoạt động', en: 'Events & Milestones' },
    date: '18/09/2026',
    seriesBadge: {
      vi: 'Hợp tác Việt Nam – Cambodia',
      en: 'Vietnam – Cambodia Operations',
    },
    title: {
      vi: 'Đội ngũ kỹ sư NAVACO hoàn thành lắp dựng & bàn giao thiết bị Kalmar tại Cảng Phnom Penh (PPAP)',
      en: 'NAVACO Engineering Team Completes Kalmar Equipment Assembly & Handover at Phnom Penh Port (PPAP)',
    },
    excerpt: {
      vi: 'Khẳng định năng lực triển khai xuyên biên giới Việt Nam - Cambodia với dự án tiếp nhận, lắp dựng cơ-điện-thủy lực và kiểm định thiết bị nâng hạ Kalmar tại PPAP.',
      en: 'Demonstrating cross-border execution across Vietnam and Cambodia with the turnkey reception, assembly, and load testing of Kalmar port machinery at PPAP.',
    },
    content: [
      {
        vi: 'Tiếp nối các dự án tại Sihanoukville và nhà máy STOLL, đội ngũ kỹ sư có chứng chỉ hãng của NAVACO đã hoàn thành xuất sắc công tác tiếp nhận, lắp dựng và hiệu chuẩn thiết bị Kalmar tại Cảng Quốc tế Phnom Penh (PPAP).',
        en: 'Building on our projects at Sihanoukville and the STOLL plant, NAVACO’s OEM-certified engineers successfully completed the reception, assembly, and calibration of Kalmar equipment at Phnom Penh Autonomous Port (PPAP).',
      },
      {
        vi: 'Sự hiện diện thường xuyên của đội ngũ kỹ thuật NAVACO tại cả Việt Nam (TP.HCM, Cái Mép, Hải Phòng, Đà Nẵng) và Cambodia giúp các cảng biển trong khu vực luôn nhận được sự hỗ trợ kỹ thuật nhanh chóng và tin cậy.',
        en: 'With permanent engineering coverage across Vietnam (HCMC, Cái Mép, Hải Phòng, Đà Nẵng) and Cambodia, NAVACO provides responsive, verifiable technical support across the Mekong and coastal port corridor.',
      },
    ],
    relatedProjectId: 'kalmar-ppap',
  },
];

export const JOB_OPENINGS: JobOpening[] = [
  {
    id: 'automation-engineer',
    title: {
      vi: 'Kỹ sư Điện – Tự động hóa Cẩu cảng (PLC / Biến tần)',
      en: 'Port Crane Electrical & Automation Engineer (PLC / Drives)',
    },
    location: {
      vi: 'TP.HCM / Xưởng Cái Mép & Công tác dự án (Việt Nam - Cambodia)',
      en: 'HCMC / Cái Mép Workshop & Project Sites (Vietnam - Cambodia)',
    },
    type: { vi: 'Toàn thời gian', en: 'Full-Time' },
    summary: {
      vi: 'Tham gia thiết kế, lập trình PLC/SCADA, cài đặt biến tần Siemens và thi công các dự án retrofit cẩu STS/RTG, hệ thống điện trung/hạ thế tại cảng biển.',
      en: 'Design, program Siemens PLCs/SCADA, parameterize Sinamics drives, and execute STS/RTG retrofit and port power projects.',
    },
    requirements: [
      { vi: 'Tốt nghiệp ĐH chuyên ngành Điện công nghiệp, Tự động hóa, Cơ điện tử', en: 'B.Eng in Electrical Engineering, Industrial Automation, or Mechatronics' },
      { vi: 'Kinh nghiệm làm việc với PLC Siemens (TIA Portal / Step 7) và biến tần công suất lớn', en: 'Hands-on experience with Siemens PLCs (TIA Portal / Step 7) and heavy industrial drives' },
      { vi: 'Sẵn sàng làm việc tại hiện trường cảng biển Cái Mép, Hải Phòng, Đà Nẵng và dự án tại Cambodia', en: 'Willingness to work on-site at terminals in Cái Mép, Hải Phòng, Đà Nẵng, and Cambodia' },
    ],
  },
  {
    id: 'mechanical-hydraulic-tech',
    title: {
      vi: 'Kỹ thuật viên Cơ khí – Thủy lực Thiết bị Nâng (STS / RTG / Reach Stacker)',
      en: 'Mechanical & Hydraulic Technician (STS / RTG / Reach Stacker)',
    },
    location: {
      vi: 'Xưởng Cái Mép (Bà Rịa - Vũng Tàu) / Hải Phòng / Đà Nẵng',
      en: 'Cái Mép Workshop (Bà Rịa - Vũng Tàu) / Hải Phòng / Đà Nẵng',
    },
    type: { vi: 'Toàn thời gian', en: 'Full-Time' },
    summary: {
      vi: 'Thực hiện bảo trì trọn gói (FCM), đại tu cơ khí, động cơ diesel-genset, hộp số, phanh Bubenzer, thay cáp Teufelberger và sửa chữa Reach Stacker/xe nâng.',
      en: 'Execute FCM preventive maintenance, mechanical/genset overhauls, Bubenzer brake servicing, Teufelberger rope reeving, and Reach Stacker repairs.',
    },
    requirements: [
      { vi: 'Kinh nghiệm bảo trì thiết bị nâng hạ cảng biển, máy công trình hoặc cơ khí công nghiệp nặng', en: 'Experience maintaining port cranes, heavy mobile machinery, or industrial hydraulics' },
      { vi: 'Hiểu biết về sơ đồ thủy lực, quy trình căn chỉnh cơ khí và an toàn nâng hạ tại cảng', en: 'Proficiency in hydraulic schematics, mechanical alignment, and terminal safety protocols' },
      { vi: 'Được đào tạo nâng cao theo tiêu chuẩn của các hãng Kalmar, Bromma, Bubenzer', en: 'Receive direct OEM technical training aligned with Kalmar, Bromma, and Bubenzer standards' },
    ],
  },
  {
    id: 'service-sales-engineer',
    title: {
      vi: 'Kỹ sư Bán hàng Kỹ thuật (Technical Sales Engineer - Port Equipment)',
      en: 'Technical Sales Engineer — Port Services & OEM Spare Parts',
    },
    location: {
      vi: 'Trụ sở TP.HCM (405/26 Xô Viết Nghệ Tĩnh)',
      en: 'HCMC Headquarters (405/26 Xô Viết Nghệ Tĩnh)',
    },
    type: { vi: 'Toàn thời gian', en: 'Full-Time' },
    summary: {
      vi: 'Tư vấn giải pháp kỹ thuật, phụ tùng chính hãng (Siemens, Kalmar, Bromma, Bubenzer, igus, Teufelberger) và xây dựng báo giá dịch vụ cho khách hàng cảng biển & nhà máy.',
      en: 'Consult port and factory clients on technical service packages and OEM spare parts across the NAVACO partner ecosystem.',
    },
    requirements: [
      { vi: 'Nền tảng kỹ thuật Điện / Cơ khí kết hợp kỹ năng phát triển khách hàng B2B công nghiệp', en: 'Engineering background (Electrical/Mechanical) combined with B2B industrial client management' },
      { vi: 'Giao tiếp tiếng Anh tốt để làm việc cùng các hãng châu Âu và khách hàng tại Cambodia', en: 'Strong English proficiency for coordinating with European OEMs and Cambodian port clients' },
    ],
  },
];

export const BRAND_VALUES_NAVACO = [
  {
    letter: 'N',
    word: 'Navigation',
    viTitle: 'Định hướng phát triển',
    enTitle: 'Strategic Navigation',
    desc: {
      vi: 'Kiên định mục tiêu trở thành đối tác dịch vụ kỹ thuật cảng biển và công nghiệp chuẩn mực tại Việt Nam và khu vực.',
      en: 'Clear technical direction focused on port and industrial engineering excellence across Vietnam and Cambodia.',
    },
  },
  {
    letter: 'A',
    word: 'Ambition',
    viTitle: 'Khát vọng vươn xa',
    enTitle: 'Regional Ambition',
    desc: {
      vi: 'Không ngừng mở rộng năng lực thi công các dự án phức tạp từ Cái Mép, Hải Phòng, Đà Nẵng tới Sihanoukville và Phnom Penh.',
      en: 'Expanding our field engineering footprint from Cái Mép, Hải Phòng, and Đà Nẵng to Sihanoukville and Phnom Penh.',
    },
  },
  {
    letter: 'V',
    word: 'Value',
    viTitle: 'Tạo nên giá trị bền vững',
    enTitle: 'Sustainable Value',
    desc: {
      vi: 'Kéo dài vòng đời thiết bị, giảm thời gian dừng máy và tối ưu hiệu quả đầu tư dài hạn cho khách hàng cảng biển.',
      en: 'Extending crane lifecycles, minimizing unplanned downtime, and protecting long-term asset value for port operators.',
    },
  },
  {
    letter: 'A',
    word: 'Accountability',
    viTitle: 'Trách nhiệm trong mọi cam kết',
    enTitle: 'Engineering Accountability',
    desc: {
      vi: 'Chịu trách nhiệm đến cùng về an toàn lao động, tiến độ bàn giao và chất lượng kỹ thuật tại hiện trường.',
      en: 'Full ownership of site safety, commissioning schedules, and verifiable engineering outcomes.',
    },
  },
  {
    letter: 'C',
    word: 'Commitment',
    viTitle: 'Giữ vững uy tín và chất lượng',
    enTitle: 'Uncompromising Commitment',
    desc: {
      vi: 'Sử dụng 100% phụ tùng chính hãng và quy trình kỹ thuật được kiểm chứng bởi các đối tác hàng đầu thế giới.',
      en: '100% genuine OEM parts and certified engineering procedures backed by global technology partners.',
    },
  },
  {
    letter: 'O',
    word: 'Optimization',
    viTitle: 'Không ngừng tối ưu',
    enTitle: 'Continuous Optimization',
    desc: {
      vi: 'Ứng dụng phần mềm bảo trì CMMS, giải pháp E-House chế tạo sẵn và công nghệ Simulator để nâng cao hiệu suất.',
      en: 'Innovating with CMMS maintenance software, pre-fabricated E-House modules, and crane simulator training.',
    },
  },
];

export const VERIFIED_PILLARS = [
  {
    number: '01',
    title: {
      vi: 'Kỹ thuật viên có chứng chỉ của hãng',
      en: 'OEM-Certified Engineering Team',
    },
    desc: {
      vi: 'Đội ngũ kỹ sư và kỹ thuật viên được đào tạo, cấp chứng chỉ trực tiếp bởi các hãng thiết bị cảng biển hàng đầu, luôn tuân thủ quy chuẩn bảo hộ (PPE) và an toàn HSE tại hiện trường.',
      en: 'Field engineers and technicians trained and certified by leading OEM partners, strictly adhering to terminal HSE and PPE standards on every site.',
    },
    evidence: {
      vi: 'Kiểm chứng qua các dự án lắp dựng Kalmar tại PPAP và retrofit Siemens tại Sihanoukville & CMIT.',
      en: 'Verified across Kalmar assembly at PPAP and Siemens retrofits at Sihanoukville & CMIT.',
    },
  },
  {
    number: '02',
    title: {
      vi: 'Xưởng kỹ thuật tại Cái Mép',
      en: 'Dedicated Workshop at Cái Mép Port Corridor',
    },
    desc: {
      vi: 'Sở hữu xưởng dịch vụ kỹ thuật ngay tại cụm cảng nước sâu Cái Mép – Thị Vải, phục vụ chế tạo phòng điện E-House, đại tu cụm cơ khí - thủy lực và kiểm định thiết bị cho thuê.',
      en: 'Strategically located technical workshop at the Cái Mép – Thị Vải deepwater port cluster for E-House fabrication, mechanical overhauls, and rental fleet inspection.',
    },
    evidence: {
      vi: 'Đáp ứng nhanh cho toàn bộ cụm cảng Cái Mép, TP.HCM và chi nhánh Hải Phòng, Đà Nẵng.',
      en: 'Enables rapid mobilization across Cái Mép, HCMC, Hải Phòng, and Đà Nẵng terminals.',
    },
  },
  {
    number: '03',
    title: {
      vi: 'Phụ tùng chính hãng (Port Ecosystem)',
      en: '100% Genuine OEM Spare Parts',
    },
    desc: {
      vi: 'Hợp tác trực tiếp cùng hệ sinh thái các hãng lớn: Siemens, Kalmar, Bromma, Dellner Bubenzer, igus, Teufelberger, Sennebogen, Alimak — đầy đủ chứng nhận CO/CQ.',
      en: 'Direct supply partnerships with Siemens, Kalmar, Bromma, Dellner Bubenzer, igus, Teufelberger, Sennebogen, and Alimak with full CO/CQ traceability.',
    },
    evidence: {
      vi: 'Tư vấn tra mã chính xác trên thiết bị thực tế và lắp đặt trọn gói.',
      en: 'On-site part verification and turnkey installation by NAVACO technicians.',
    },
  },
  {
    number: '04',
    title: {
      vi: 'Hiện diện tại Việt Nam & Cambodia',
      en: 'Proven Footprint in Vietnam & Cambodia',
    },
    desc: {
      vi: 'Năng lực triển khai dự án xuyên biên giới đã được kiểm chứng thực tế tại các cảng biển và nhà máy lớn ở cả Việt Nam (TP.HCM, Cái Mép, Đà Nẵng, Hải Phòng) và Cambodia (Sihanoukville, Phnom Penh).',
      en: 'Field-proven project execution across major terminals and industrial plants in Vietnam (HCMC, Cái Mép, Đà Nẵng, Hải Phòng) and Cambodia (Sihanoukville, Phnom Penh).',
    },
    evidence: {
      vi: 'Chuỗi dự án thực tế tại PAS Sihanoukville, PPAP Phnom Penh, STOLL, CMIT, Tân Thuận, Tiên Sa.',
      en: 'Active project portfolio at PAS Sihanoukville, PPAP Phnom Penh, STOLL, CMIT, Tân Thuận & Tiên Sa.',
    },
  },
];

export const OFFICE_LOCATIONS = [
  {
    id: 'hq-hcm',
    badge: { vi: 'Trụ sở chính · TP. Hồ Chí Minh', en: 'Headquarters · Ho Chi Minh City' },
    name: { vi: 'Văn phòng Điều hành & Kinh doanh NAVACO', en: 'NAVACO Corporate & Engineering Office' },
    address: {
      vi: '405/26 Xô Viết Nghệ Tĩnh, Phường 24, Quận Bình Thạnh, TP. Hồ Chí Minh',
      en: '405/26 Xo Viet Nghe Tinh St., Ward 24, Binh Thanh District, Ho Chi Minh City, Vietnam',
    },
    scope: {
      vi: 'Trung tâm điều phối kỹ thuật, tư vấn giải pháp, báo giá phụ tùng và quản lý dự án Việt Nam – Cambodia.',
      en: 'Central engineering design, OEM spare parts quotation, and Vietnam – Cambodia project management.',
    },
    coordinates: '10.8038° N, 106.7114° E',
  },
  {
    id: 'workshop-caimep',
    badge: { vi: 'Xưởng dịch vụ · Cái Mép', en: 'Technical Workshop · Cái Mép' },
    name: { vi: 'Xưởng Dịch vụ Kỹ thuật & Thiết bị Cái Mép', en: 'Cái Mép Technical Workshop & Fleet Base' },
    address: {
      vi: 'Khu vực Cụm Cảng Cái Mép – Thị Vải, TX. Phú Mỹ, Tỉnh Bà Rịa – Vũng Tàu',
      en: 'Cái Mép – Thị Vải Deepwater Port Zone, Phú Mỹ Town, Bà Rịa – Vũng Tàu Province',
    },
    scope: {
      vi: 'Chế tạo & lắp ráp phòng điện E-House, đại tu cụm cơ khí/thủy lực, bãi tập kết kiểm định thiết bị cho thuê và trực bảo trì FCM 24/7.',
      en: 'E-House fabrication, mechanical/hydraulic overhaul bay, rental fleet depot, and 24/7 FCM standby base.',
    },
    coordinates: '10.5374° N, 107.0268° E',
  },
  {
    id: 'branch-haiphong',
    badge: { vi: 'Chi nhánh Miền Bắc · Hải Phòng', en: 'Northern Branch · Hải Phòng' },
    name: { vi: 'Chi nhánh & Đội Kỹ thuật Khu vực Hải Phòng', en: 'Hải Phòng Regional Engineering Office' },
    address: {
      vi: 'Khu vực Cụm Cảng Đình Vũ – Lạch Huyện, Quận Hải An, TP. Hải Phòng',
      en: 'Đình Vũ – Lạch Huyện Port Corridor, Hải An District, Hải Phòng City',
    },
    scope: {
      vi: 'Phục vụ bảo trì, cung cấp phụ tùng và sửa chữa cẩu cảng cho toàn bộ cụm cảng biển Hải Phòng – Quảng Ninh.',
      en: 'Supporting port maintenance, OEM spare parts, and crane repairs across Hải Phòng and Northern Vietnam.',
    },
    coordinates: '20.8449° N, 106.7480° E',
  },
  {
    id: 'hub-danang-cambodia',
    badge: { vi: 'Trạm Kỹ thuật · Đà Nẵng & Cambodia', en: 'Field Operations · Đà Nẵng & Cambodia' },
    name: { vi: 'Đội Dự án Đà Nẵng – Phnom Penh – Sihanoukville', en: 'Đà Nẵng & Cambodia (PPAP / PAS) Project Teams' },
    address: {
      vi: 'Trạm dịch vụ Cảng Tiên Sa (Đà Nẵng) & Đội dự án thường trực tại Phnom Penh / Sihanoukville (Cambodia)',
      en: 'Tiên Sa Port Service Station (Đà Nẵng) & Project Taskforce in Phnom Penh / Sihanoukville (Cambodia)',
    },
    scope: {
      vi: 'Triển khai các dự án nâng cấp RTG, lắp đặt thiết bị Kalmar, thi công điện công nghiệp và cho thuê thiết bị nâng.',
      en: 'Executing RTG modernization, Kalmar erection, industrial MV/LV electrification, and rental fleet support.',
    },
    coordinates: '11.5564° N, 104.9282° E',
  },
];

export const CONTACT_INFO = {
  hotline: '090.1331.808',
  hotlineRaw: '0901331808',
  salesEmail: 'sales@navaco.vn',
  contactPerson: 'Danny Do',
  contactPersonEmail: 'nhon.do@navaco.vn',
  hqAddress: '405/26 Xô Viết Nghệ Tĩnh, P.24, Q. Bình Thạnh, TP.HCM',
  brandGuidelinePdfUrl: '/assets/aistudio/KD_QT_Navaco-Bo-nhan-dien-thuong-hieu_1.0_f04fa0a8.pdf',
  websiteBriefPdfUrl: '/assets/aistudio/NAVACO_Brief_thiet_ke_website_NAVACO_a910fe6d.pdf',
};
