export interface Metadata {
  protocol: number;
  pointer: string;
  id: number;
  title: string;
  description: string;
  roadmap: string;
  challenges: string;
  website: string;
  projectImg?: string | Buffer;
}

// Inputs
export type InputProps = {
  label: string;
  name: string;
  value?: string;
  placeholder?: string;
  changeHandler: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
};

export type RadioInputProps = {
  name: string;
  value: string;
  currentValue?: string;
  changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export interface ProjectEvent {
  id: number;
  block: number;
}

export interface MetaPtr {
  protocol: string;
  pointer: string;
}

export interface Round {
  address: string;
  name: string;
  roundMetaPtr: MetaPtr;
  roundMetadata: any;
  applicationMetaPtr: MetaPtr;
  applicationMetadata: any;
}
